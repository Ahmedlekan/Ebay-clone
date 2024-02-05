'use client';

import Image from "next/image";


export default function ComeShop() {

  return ( 
  <div>

    <div className="flex flex-col h-[60vh] w-[100vw]
    lg:flex-row relative bg-gray-100 mt-16 mx-auto">

      {/* TEXT CONTAINER */}
      <div className=" flex-1 flex items-start justify-start flex-col gap-3 
      text-[#592e13] font-semibold p-4 md:p-10">
        <h2 className=" text-lg font-bold md:text-3xl xl:text-4xl">
        You've got the goals, we've got the gear
        </h2>

        <p className="max-w-[300px]">
          Grow your collection with Lego and top on ebay.
        </p>
        <button className="hover:bg-[#592e13] text-[#592e13] py-2 px-6 border 
        border-[#592e13] rounded-2xl hover:text-white transition-all duration-300
        ">
          Find your favs
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="h-[60vh] w-[100vw] flex-[40%] relative">
        <Image
          src="/images/comebuy.jpeg"
          alt=""
          fill
          className=" object-fill"
        />
      </div>
    </div>

  </div>
    
  );
};


