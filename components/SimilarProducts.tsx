"use client"
import React,{useState, useEffect} from 'react'
import { BiLoader } from 'react-icons/bi'
import ProductComp from "@/components/Product"
import { ProductProps } from '@/app/type'

const SimilarProducts = () => {
    
  const [products, setProducts] = useState<ProductProps[]>([])

  const getRandomProducts = async () => {
    try {
      const response = await fetch('/api/products/get-random')
      const result = await response.json()

      if (result) {
        setProducts(result)
        return
      }

      setProducts([])
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => { getRandomProducts() }, [])

  return (
    <>
        <div>
            <div className="border-b py-1 max-w-[1200px] mx-auto" />

            <div className="max-w-[1200px] mx-auto">
                <div className="font-bold text-2xl py-2 mt-4">
                    Similar sponsored items
                </div>

                {products.length > 0 ?
                  <div className="grid grid-cols-5 gap-4 mt-2">
                    {products.map(product => (
                        <ProductComp key={product.id} product={product} />
                    ))}
                  </div>
                : <div className="flex items-center justify-center">
                      <div className="flex items-center 
                        justify-center gap-4 font-semibold"
                    >
                          <BiLoader size={30} className="text-blue-400 
                          animate-spin"/>
                          Loading Products...
                      </div>
                  </div>}
            </div>
        </div>
    </>
  )
}

export default SimilarProducts