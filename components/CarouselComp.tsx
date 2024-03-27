'use client';

import {useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "You've got the goals, we've got the gear",
    des:"Shop millions of parts and accessories on eBay.",
    image: "/images/carousel-1.jpeg",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in NY",
    des:"Discover the right stuff for every step of your fitness journey.",
    image: "/images/s-l966.webp",
  },
];


export default function CarouselComp() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return ( 
  <div>

    <div className="flex flex-col h-[60vh] w-[100vw]
    lg:flex-row relative bg-[#f0c72c]">

      {/* TEXT CONTAINER */}
      <div className=" flex-1 flex items-start justify-start flex-col gap-3 
      text-[#592e13] font-semibold p-4 md:p-10">
        <h2 className=" text-lg font-bold md:text-3xl xl:text-4xl">
          {slides[currentIndex].title}
        </h2>

        <p className="max-w-[300px]">{slides[currentIndex].des}</p>
        <button className="hover:bg-[#592e13] text-[#592e13] py-2 px-6 border 
        border-[#592e13] rounded-2xl hover:text-white transition-all duration-300
        hover:bg-[#592e13">
          { currentIndex ? "Find your parts" : "Find your favorite" }
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="h-[60vh] w-[100vw] flex-[40%] relative">
        <Image
          src={slides[currentIndex].image}
          alt=""
          fill
          className=" object-fill"
        />
      </div>
    </div>

    {/* Left Arrow */}
    <div className='group-hover:block absolute top-[60%] -translate-x-0 left-1
      translate-y-[-50%]  text-2xl rounded-full p-2 bg-white text-[#592e13] 
      cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={20} />
    </div>
    {/* Right Arrow */}
    <div className='group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] 
      right-1 text-2xl rounded-full p-2 bg-white text-[#592e13] cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={20} />
    </div>
  
  </div>
  

    
  );
};


// <>
    //   <div className=' max-w-full mx-auto'>
    //     <Carousel 
    //     showArrows={true} 
    //     autoPlay={true} 
    //     interval={3000} 
    //     infiniteLoop={true} 
    //     showThumbs={false}>
            
    //         <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
              
    //           <div className="flex-1 flex items-center justify-center flex-col gap-8 
    //           text-red-500 font-bold">
    //             <h2 className="text-5xl text-center uppercase p-4 md:p-10 
    //             md:text-6xl xl:text-7xl">You've got the goals, we've got the gear</h2>
    //             <span>Discover the right stuff for every step of your fitness journey.</span>
    //             <button className="bg-red-500 text-white py-4 px-8">Shop now</button>
    //           </div>
              
    //           <div className=" w-[500px] flex-1">
    //             <Image fill 
    //             alt="" 
    //             className="object-cover"
    //             src="/images/slide1.png" />
    //           </div>
            
    //         </div>

    //        <div></div>

    //     </Carousel>
    //   </div>
    // </>