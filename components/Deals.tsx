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

    <div key={product.id} className="p-2">  
      <div className="flex flex-col items-center gap-5 bg-white rounded-lg"
      >
        <Link href={`/product/${product.id}`} className=" "> 
        { product?.url ? (
          <Image
            src={product.url}
            alt={`Product ${product.id}`}
            width={300} 
            height={250} 
            className='w-[400px] h-[200px] rounded-lg object-contain '
          />
        ): null}                 
        </Link>
        <div className="bg-white">
          <Link href={`/product/${product.id}`}>
              <h3 className="text-lg text-start font-semibold">
                {product.description}
              </h3>
          </Link>
        </div>
      </div>
    </div>
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
    
    <div className='max-w-[1200px] mx-auto mt-20 relative p-4'>
        
        <div className="flex justify-between item-center mb-4">
          <h2 className="text-xl md:text-2xl font-semibold 
            hover:underline"
            >
            Today&apos;s Deals – All With Free Shipping
          </h2>
          <Link href="/allproducts" className="underline" 
          >
            See all
          </Link>
        </div>
        
        <div className="max-w-[1200px]">

            <div>
              <Slider {...settings}>
                  {sliderCategory}
              </Slider>
            </div>
        </div>
        
    </div>
    
  );
};