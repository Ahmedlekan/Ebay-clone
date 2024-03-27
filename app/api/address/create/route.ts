import prisma from "@/lib/Prisma";
import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// Define the POST function that handles incoming HTTP POST requests
export async function POST(req: any) {
    // Create a Supabase client using the server key stored in the cookies
    const supabase = createServerComponentClient({ cookies });

    try {
        // Retrieve the user data from Supabase authentication
        const { data: { user } } = await supabase.auth.getUser();

        // If no user is found, throw an error
        if (!user) throw Error();

        // Parse the JSON body of the incoming request
        const body = await req.json();

        // Create a new address using Prisma ORM
        const res = await prisma.addresses.create({
            data: {
                user_id: user?.id,
                name: body.name,
                address: body.address,
                zipcode: body.zipcode,
                city: body.city,
                country: body.country,
            }
        });

        // Disconnect from the Prisma database connection
        await prisma.$disconnect();

        // Return a JSON response with the result of the address creation
        return NextResponse.json(res);
    } catch (error) {
        // Handle errors by logging them and returning a 400 Bad Request response
        console.error(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}