"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import createIsLoading from "@/hooks/useIsLoading";
import { ProductProps } from "@/app/type";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const SampleNextArrow = (props:any) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-14 rounded-full text-white bg-black 
      bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer 
      flex justify-center items-center z-10 absolute top-[35%] right-2"
      onClick={onClick}
    >
      <span className="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

const SamplePrevArrow = (props:any) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-14 rounded-full text-black bg-gray-300 
      bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer 
      flex justify-center items-center absolute z-10 top-[35%] left-2"
      onClick={onClick}
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

export default function Deals() {
  const [products, setProducts] = useState<ProductProps[]>([])

  const getProducts = async () => {
    createIsLoading(true)
    const response = await fetch('/api/products')
    const prods = await response.json()
    
    const formatDeals  = ()=>{
      const deals: ProductProps[] = [];
      prods.forEach((prod: ProductProps, i: number) => {
        if (prod?.category === "Deals") {
          deals.push(prod);
        }
      });
      return [deals]
    }
    const [deals] = formatDeals()
    setProducts([])
    setProducts(deals)
    createIsLoading(false)
  }
  useEffect(() => { getProducts() }, [])

  const sliderCategory = products.map( (product:ProductProps, index:number)=>(

    <div key={product.id} className="w-full ">
                  <Link href={`/product/${product.id}`} className=" "> 
                  { product?.url ? (
                    <Image
                      src={product.url}
                      alt={`Product ${product.id}`}
                      width={800} // Adjust the width as needed
                      height={300} // Adjust the height as needed
                      className="rounded cursor-pointer object-fill "
                    />
                  ): null}                 
                  </Link>
                  <div className="bg-white p-4">
                    <Link href={`/product/${product.id}`}>
                        <h3 className="text-lg font-semibold">
                          {product.description}
                        </h3>
                    </Link>
                  </div>
                </div>

    // <div key={index}>
    //   <Link 
    //     href={`/product/${product?.id}`} 
    //   >
    //     { product?.url ? (
    //         <Image alt='product image' width={250} height={250}
    //             className="rounded cursor-pointer object-contain" 
    //             src={product.url} 
    //         />
    //     )  : null }

    //     <div className="pt-2 px-1">
    //       <div className="font-semibold text-[15px] hover:underline cursor-pointer">
    //         {product?.title}
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  ))

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

  return ( 
    
    <div className='max-w-[1200px] mx-auto mt-20 relative'>
        
        <h2 className="text-2xl font-semibold mb-5 hover:underline">
        Today's Deals – All With Free Shipping
        </h2>
        
        <div className="max-w-[1200px]">
            <Link href="/allproducts" className="absolute top-0 
                right-0 underline"
            >
            See all
            </Link>

            <div>
              <Slider {...settings}>
                  {sliderCategory}
              </Slider>
            </div>
        </div>
        
    </div>
    
  );
};