"use client"
import { useState, useEffect } from "react"
import CarouselComp from "@/components/CarouselComp"
import Product from "@/components/Product"
import createIsLoading from "@/hooks/useIsLoading"
import Loading from '@/components/Loading'
import { ProductProps } from "../type"

export default function Home() {
  
  const [products, setProducts] = useState<ProductProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() =>{
      window.addEventListener("storage", function () {
        let res = localStorage.getItem('isLoading')
        res === 'false' ? setIsLoading(false) : setIsLoading(true)
      })
    })

  const getProducts = async () => {
    createIsLoading(true)

    const response = await fetch('/api/products')
    const prods = await response.json()

    setProducts([])
    setProducts(prods)
    createIsLoading(false)
  }

  useEffect(() => { getProducts() }, [])
    
 
  return (
    <section>
      {isLoading ? <Loading /> : <div></div>}

      <div className="max-w-[1200px] mx-auto">
            <div className="text-2xl font-bold mt-4 mb-6 px-4">
              Products
            </div>
            <div className="grid grid-cols-5 gap-4 mt-2">
                    {products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
              </div>
          </div>
    </section>
  )
}
