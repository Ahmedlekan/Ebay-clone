'use client'

import debounce from "debounce";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { BiLoaderCircle } from 'react-icons/bi'
import { ProductProps } from "@/app/type";
import { allCategories } from "@/constant";
import { useMediaQuery } from "react-responsive";

export default function MainHeader() {

    const [items, setItems] = useState<ProductProps[]>([])
    const [isSearching, setIsSearching] = useState(null || Boolean)
    const []  = useState("All Categories")
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    const handleSearchName = debounce(async (event) => {
        if (event.target.value == "") {
            setItems([])
            return
        }

        setIsSearching(true)

        try {
            const response = await fetch(`/api/products/search-by-name/${event.target.value}`)
            const result = await response.json()

            if (result) {
                setItems(result)
                setIsSearching(false)
                return
            }
            setItems([])
            setIsSearching(false)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }, 500)
    
    return (
        <>
            <div id="MainHeader" className="border-b">
                <nav className="flex items-center justify-between w-full 
                mx-auto max-w-[1200px]"
                >
                    <div className="flex items-center w-full bg-white">
                        <div className="flex lg:justify-start justify-between 
                        gap-5 max-w-[1150px] w-full px-4 py-5 mx-auto"
                        >
                            <Link href="/">
                                <Image width={150} height={120} 
                                src="/images/logo.svg"
                                alt="ebay logo"
                                
                                 />
                            </Link>

                            <div className="w-full">
                                <div className="relative">
                                    
                                    <div className="flex items-center">
                                        <div className="relative flex 
                                        items-center border-2 border-gray-900 
                                        w-full p-2"
                                        >    
                                            <button className="hidden md:flex items-center">
                                                <AiOutlineSearch size={22}/>
                                            </button>

                                            <input 
                                                className="
                                                    w-full
                                                    placeholder-gray-400
                                                    text-sm
                                                    pl-3
                                                    focus:outline-none
                                                "
                                                onChange={handleSearchName}
                                                placeholder="Search for anything"
                                                type="text"
                                            />

                                            <select
                                                onChange={ ()=> {} }
                                                className="absolute hidden md:block right-0 py-[9px] px-3 bg-gray-200 
                                                text-gray-700 text-sm rounded-r"
                                            >
                                                <option>All Categories</option>
                                                {allCategories.map( (category, index) => (
                                                    <option key={index}>{category}</option>
                                                ) )}
                                            </select>

                                            {isSearching ? <BiLoaderCircle 
                                            className="mr-2 animate-spin" 
                                            size={22} /> : null}
                                        
                                            {items.length > 0 ?
                                                <div className="absolute 
                                                bg-white max-w-[910px] h-auto 
                                                w-full z-20 left-0 top-12 border 
                                                p-1"
                                                >
                                                  {items.map((item) => (
                                                      <div className="p-1" key={item.id}>
                                                          <Link 
                                                              href={`/product/${item?.id}`}
                                                              className="flex items-center 
                                                              justify-between w-full cursor-pointer 
                                                              hover:bg-gray-200 p-1 px-2"
                                                          >
                                                              <div className="flex items-center">
                                                                  <Image className="rounded-md" 
                                                                  width={40} height={40} alt="image search" 
                                                                  src={item?.url} 
                                                                  />
                                                                  <div className="truncate ml-2">
                                                                    { item?.title }
                                                                  </div>
                                                              </div>

                                                              <div className="truncate">
                                                                £{ (item?.price / 100).toFixed(2) }
                                                              </div>
                                                          </Link>
                                                      </div>
                                                  ))}

                                                </div>
                                            : null}

                                        </div>

                                        {isSmallScreen ? (
                                            <button className="flex items-center bg-blue-600 
                                                p-[10px]  text-white ml-2"
                                            >
                                                <AiOutlineSearch size={22}/>
                                            </button>
                                        ): (
                                            <button className="flex items-center 
                                            bg-blue-600 text-sm font-semibold 
                                            text-white p-[10.5px] ml-2 px-14"
                                            >
                                                Search
                                            </button>
                                        )}

                                        <div className="text-xs px-2 hidden md:block 
                                        hover:text-blue-500 cursor-pointer">
                                          Advanced
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
  }
  