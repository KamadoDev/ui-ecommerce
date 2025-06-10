import React from 'react'
import Category from '../components/Category'
import Slide from '../components/Slide'
import FlashSales from '../components/FlashSales'
import ProductSlide from '../components/ProductSlide'

const Home = () => {
  return (
    <main className='container px-5 md:px-4 mx-auto pt-[136px]'>
      <div className='grid grid-cols-12 gap-6 py-5'>
        <Category />
        <Slide />
      </div>
      <FlashSales />
      <ProductSlide />
    </main>
  )
}

export default Home