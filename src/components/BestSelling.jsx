import React from 'react'
import ProductSlide from './ProductSlide'

const BestSeller = () => {
  return (
    <section className='container px-5 md:px-4 mx-auto pt-4 md:pt-7'>
      {/* Header */}
      <div className='flex items-center gap-3 mb-4'>
        <div className='w-4 h-7 bg-green-600 rounded-sm' />
        <h3 className='text-green-600 font-semibold'>Xu hướng</h3>
      </div>

      {/* Title */}
      <div className="flex gap-5 md:gap-10 items-end mb-6 flex-wrap">
        <h2 className="text-3xl font-bold">Sản phẩm bán chạy nhất</h2>
      </div>
      {/* product slide */}
      <ProductSlide type="bestseller" row="single" />
    </section>
  )
}

export default BestSeller