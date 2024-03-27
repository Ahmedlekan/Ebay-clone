"use client"

// https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only

import MainLayout from "../layouts/MainLayout"
import TextInput from "@/components/TextInput"
import { useEffect, useState, useCallback } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useRouter } from "next/navigation"
import { toast } from 'react-toastify';
import ClientOnly from "@/components/ClientOnly"
import { useUser } from "../context/user"
import createIsLoading from "@/hooks/useIsLoading"
import createAddress from "@/hooks/useCreateAddress"
import userAddress from "@/hooks/useUserAddress"

interface ErrorType {
    type: string;
    message?: string;
  }

  const validate = (name: string, address: string, zipcode: string, city: string, country: string) => {
    let isError = false;
    let error: ErrorType | any = {};

    if (!name) {
        error = { type: 'name', message: 'A name is required' };
        isError = true;
    } else if (!address) {
        error = { type: 'address', message: 'An address is required' };
        isError = true;
    } else if (!zipcode) {
        error = { type: 'zipcode', message: 'A zipcode is required' };
        isError = true;
    } else if (!city) {
        error = { type: 'city', message: 'A city is required' };
        isError = true;
    } else if (!country) {
        error = { type: 'country', message: 'A country is required' };
        isError = true;
    }

    return { isError, error };
};

export default function AddressPage() {

    const router = useRouter()
    const { user } = useUser()

    const [addressId, setAddressId] = useState("")
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [isUpdatingAddress, setIsUpdatingAddress] = useState(false)
    
    const [error, setError] = useState<ErrorType | any>({})
    
    const showError = ({type, message} : ErrorType) => {
        if (Object.entries(error).length > 0 && error?.type == type) {

            return (error as ErrorType).message
        }
        return ''
    }
    
    const getAdddress = async () => {
        if (user?.id == null || user?.id == undefined) {
            createIsLoading(false)
            return
        }
        
        const response = await userAddress()
        if (response) { 
            setTheCurrentAddres(response) 
            createIsLoading(false)
            return
        } 
        createIsLoading(false)
    }
    
    useEffect(() => {
        createIsLoading(true)
        getAdddress()
    }, [user])

    const setTheCurrentAddres = (result:any) => {
        setAddressId(result.id)
        setName(result.name)
        setAddress(result.address)
        setZipcode(result.zipcode)
        setCity(result.city)
        setCountry(result.country)
    }

    const validateCallback = useCallback(() => {
        const { isError, error } = validate(name, address, zipcode, city, country);
        setError(error);
        return isError;
    }, [name, address, zipcode, city, country]);

    const submit = async (event: any) => {
        event.preventDefault();
        let isError = validateCallback();

        if (isError) {
            toast.error(error.message, { autoClose: 3000 });
            return;
        }

        try {
            setIsUpdatingAddress(true);

            const response = await createAddress({
                addressId,
                name,
                address,
                zipcode,
                city,
                country,
            });

            setTheCurrentAddres(response);
            setIsUpdatingAddress(false);
            toast.success('Address updated!', { autoClose: 3000 });
            router.push('/checkout');

        } catch (error) {
            setIsUpdatingAddress(false);
            console.log(error);
            alert(error);
        }
    };


  return (
    <>
        <MainLayout>
            <div 
                id="AddressPage" 
                className="mt-4 max-w-[600px] mx-auto px-2"
            >
                <div className="mx-auto bg-white rounded-lg p-3">

                    <div className="text-xl text-bold mb-2">Address Details</div>

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <ClientOnly>
                                <TextInput 
                                    className="w-full"
                                    string={name}
                                    placeholder="Name"
                                    onUpdate={setName}
                                    error={showError({type: 'name'})!}
                                />
                            </ClientOnly>
                        </div>

                        <div className="mb-4">
                            <ClientOnly>
                                <TextInput 
                                    className="w-full"
                                    string={address}
                                    placeholder="Address"
                                    onUpdate={setAddress}
                                    error={showError({type: 'address'})!}
                                />
                            </ClientOnly>
                        </div>

                        <div className="mb-4">
                            <ClientOnly>
                                <TextInput 
                                    className="w-full mt-2"
                                    string={zipcode}
                                    placeholder="Zip Code"
                                    onUpdate={setZipcode}
                                    error={showError({type: 'zipcode'})!}
                                />
                            </ClientOnly>
                        </div>

                        <div className="mb-4">
                            <ClientOnly>
                                <TextInput 
                                    className="w-full mt-2"
                                    string={city}
                                    placeholder="City"
                                    onUpdate={setCity}
                                    error={showError({type: 'city'})!}
                                />
                            </ClientOnly>
                        </div>

                        <div>
                            <ClientOnly>
                                <TextInput 
                                    className="w-full mt-2"
                                    string={country}
                                    placeholder="Country"
                                    onUpdate={setCountry}
                                    error={showError({type: 'country'})!}
                                />
                            </ClientOnly>
                        </div>

                        <button 
                            type="submit"
                            disabled={isUpdatingAddress}
                            className={`
                                mt-6
                                w-full 
                                text-white 
                                text-lg 
                                font-semibold 
                                p-3 
                                rounded
                                ${isUpdatingAddress ? 'bg-blue-800' : 'bg-blue-600'}
                            `}
                        >
                            {!isUpdatingAddress
                                ? <div>Update Address</div>
                                : <div className="flex items-center justify-center gap-2">
                                      <AiOutlineLoading3Quarters className="animate-spin" />
                                      Please wait...
                                  </div>
                            }
                        </button>

                    </form>
                </div>
            </div>
        </MainLayout>
    </>
  )
}