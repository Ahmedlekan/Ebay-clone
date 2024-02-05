"use client"

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import SimilarProducts from '@/components/SimilarProducts'
import { useCart } from '@/app/context/cart'
import { toast } from "react-toastify"
import createIsLoading from '@/hooks/useIsLoading'
import { ProductProps } from '@/app/type'

type ParamsProps = {
  params: {id: string}
}

const Productpage = ({params}:ParamsProps) => {
  const cart = useCart()
  const [product, setProduct] = useState({} as ProductProps)
  
  const getProduct = async () => {
    createIsLoading(true)
    setProduct({} as ProductProps)

    const response = await fetch(`/api/product/${params.id}`)
    const prod: ProductProps = await response.json()
    
    setProduct(prod)
    cart.isItemAddedToCart(prod)
    createIsLoading(false)

  }

  useEffect(() => { 
    getProduct() 
  }, [])
      
  return (
    <section>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">

            {product?.url 
              ? <Image className="rounded-lg"
                    width={450}
                    height={400}
                    alt='product img' 
                    src={product?.url} /> 
              : <div className="w-[40%]"></div> 
            }

            <div className="px-4 w-full">
              <div className="font-bold text-xl">{product?.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Brand New - Full Warranty
            </div>

              <div className="border-b py-1" />

              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Condition:
                  <span className="font-bold text-[17px] ml-2">
                    New
                  </span>
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Price: 
                    {product?.price 
                      ? <div className="font-bold text-[20px] ml-2">
                          GBP £{(product?.price / 100).toFixed(2)}
                        </div> 
                    : null }
                  </div>

                  <div className='flex flex-col gap-5'>
                    <button 
                      onClick={() => {
                        if (cart.isItemAdded) {
                          cart.removeFromCart(product)
                          toast.info('Removed from cart', { autoClose: 3000 })
                        } else {
                          cart.addToCart(product)
                          toast.success('Added to cart', { autoClose: 3000 })
                        }
                      }} 
                      className={`
                        text-white py-2 px-20 rounded-full cursor-pointer 
                        ${cart.isItemAdded ? 'bg-[#e9a321] hover:bg-[#bf851a]' : 'bg-[#3498C9] hover:bg-[#0054A0]'}
                      `}
                    >
                        {cart.isItemAdded ? 'Remove From Cart' : 'Add To Cart'}
                    </button>

                    <button 
                      onClick={() => {}} 
                      className={`bg-[#0054A0] hover:bg-[#3498C9]
                        text-white py-2 px-20 rounded-full cursor-pointer `}
                    >
                        But It Now
                    </button>
                  </div>
                
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="font-semibold pb-1">Description:</div>
                <div className="text-sm">{product?.description}</div>
              </div>

            </div>
          </div>
        </div>

        <SimilarProducts />

    </section>
  )
}

export default Productpage