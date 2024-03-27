"use client"

import { useState, useEffect } from 'react'
import TopMenu from '@/components/TopMenu'
import MainHeader from '@/components/MainHeader'
import SubMenu from '@/components/SubMenu'
import CarouselComp from '@/components/CarouselComp'
import Category from '@/components/Category'
import Deals from '@/components/Deals'
import ComeShop from '@/components/ComeShop'
import ComeShop2 from '@/components/ComeShop2'
import Loading from '@/components/Loading'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() =>{
    window.addEventListener("storage", function () {
      let res = localStorage.getItem('isLoading')
      res === 'false' ? setIsLoading(false) : setIsLoading(true)
    })
  })

  return (
    <>
      <div className=''>
      {isLoading ? <Loading /> : <div></div>}

        <div>
          <SubMenu />
          <CarouselComp />
          <Category />
          <Deals />
          <ComeShop2 />
          <ComeShop />
        </div>
      </div>
    </>
  )
}

export default Home