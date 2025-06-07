import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { slideData } from '../utils/data';
import { NavLink } from 'react-router-dom';

const Slide = () => {
  return (
    <section className='col-span-12 md:col-span-9 w-full'>
      <div className='relative'>
        <Swiper
          navigation={
            {
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom'
            }
          }
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Pagination, Autoplay]}
          className='rounded-md overflow-hidden'
        >
          {
            slideData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className='relative w-full h-[300px] md:h-[400px] bg-black flex items-center justify-between px-10 text-white'>
                  <div className='z-10 max-w-[50%]'>
                    <h3 className='text-sm md:text-lg text-gray-400 mb-1'>{slide.title}</h3>
                    <h2 className='text-2xl md:text-4xl font-bold leading-tight mb-4'>{slide.description}</h2>
                    <NavLink to='#' className='text-sm md:text-base border-b border-white hover:text-cyan-400 transition'>{slide.button}</NavLink>
                  </div>
                  <div className='z-0'>
                    <img src={slide.image} alt={slide.title} className='object-contain drop-shadow-lg' />
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        {/* Nút Prev/Next tùy chỉnh */}
        <button className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-20 text-white bg-black/30 hover:bg-black/60 rounded-full p-2">
          &#8592;
        </button>
        <button className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-20 text-white bg-black/30 hover:bg-black/60 rounded-full p-2">
          &#8594;
        </button>

        {/* Phân trang tùy chỉnh */}
        <div className="swiper-pagination-custom absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex" />
      </div>
    </section>
  )
}

export default Slide