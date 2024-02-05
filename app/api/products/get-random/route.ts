import prisma from "@/lib/Prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const productsCount = await prisma.products.count();
        const skip = Math.floor(Math.random() * productsCount);
        const products = await prisma.products.findMany({
            take: 10,
            skip: skip,
            orderBy: { id: 'asc' },
        })
        await prisma.$disconnect();
        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}

