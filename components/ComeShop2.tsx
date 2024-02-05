'use client';

import Image from "next/image";


export default function ComeShop2() {

  return ( 
    <div>
        <div className="relative mt-16 mx-auto flex flex-col h-[60vh] w-[100vw] 
            bg-cover bg-center" style={{ backgroundImage: 'url("/images/comeshop2.jpeg")' }}
        >
            
            <div className="absolute inset-0 flex items-center justify-start p-8">
                <div className=" max-w-[300px] text-black">
                    <h1 className="text-lg md:text-3xl xl:text-4xl 
                    font-bold mb-4">
                    You ride deserve some love
                    </h1>
                    <p className="text-lg mb-6">
                        Shop millions of parts and accessories on eBay.
                    </p>
                    <button className="hover:bg-black text-black py-2 px-6 
                    border border-black rounded-2xl hover:text-white 
                    transition-all duration-300">
                        Find your parts
                    </button>
                </div>
            </div>

        </div>
    </div>


//   <div>

//     <div className="flex flex-col h-[60vh] w-[100vw]
//     lg:flex-row relative bg-gray-100 mt-10 mx-auto">

//       {/* TEXT CONTAINER */}
//       <div className=" flex-1 flex items-start justify-start flex-col gap-3 
//       text-[#592e13] font-semibold p-4 md:p-10">
//         <h2 className=" text-lg font-bold md:text-3xl xl:text-4xl">
//         You ride deserve some love
//         </h2>

//         <p className="max-w-[300px]">Shop millions of parts and accessories on eBay.
//         </p>
//         <button className="hover:bg-[#592e13] text-[#592e13] py-2 px-6 border 
//         border-[#592e13] rounded-2xl hover:text-white transition-all duration-300
//         hover:bg-[#592e13">
//           Find your favorite
//         </button>
//       </div>

//       {/* IMAGE CONTAINER */}
//       <div className="h-[60vh] w-[100vw] flex-[40%] relative">
//         <Image
//           src="/images/comeshop2.jpeg"
//           alt=""
//           fill
//           className=" object-fill"
//         />
//       </div>
//     </div>

//   </div>
    
  );
};


