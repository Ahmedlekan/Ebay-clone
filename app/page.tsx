"use client"

import TopMenu from '@/components/TopMenu'
import MainHeader from '@/components/MainHeader'
import SubMenu from '@/components/SubMenu'
import CarouselComp from '@/components/CarouselComp'
import Category from '@/components/Category'
import Deals from '@/components/Deals'
import ComeShop from '@/components/ComeShop'
import ComeShop2 from '@/components/ComeShop2'

const Home = () => {
  
  return (
    <>
      <div className=''>

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