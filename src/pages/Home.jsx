import React from 'react'
import Category from '../components/Category'
import Slide from '../components/Slide'
import FlashSales from '../components/FlashSales'
import ProductSlide from '../components/ProductSlide'
import BestSeller from '../components/BestSelling'
import SuggestedProducts from '../components/SuggestedProducts'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <main className='container px-5 md:px-4 mx-auto pt-[136px]'>
      <div className='grid grid-cols-12 gap-6 py-5'>
        <Category />
        <Slide />
        <Banner />
      </div>
      <FlashSales />
      <BestSeller />
      <SuggestedProducts />
    </main>
  )
}

export default Home