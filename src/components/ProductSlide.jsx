import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import ProductItem from './ProductItem'
import { NavLink } from 'react-router-dom'


const ProductSlide = ({ type = 'flashSales', row = 'double' }) => {
  // Fake danh sách 24 sản phẩm
  const products = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: type === 'bestseller' ? `Sản phẩm bán chạy ${index + 1}` : type === 'suggested' ? `Sản phẩm gợi ý ${index + 1}` : `Sản phẩm giảm giá ${index + 1}`,
    image: '/images/iPhone-14-plus-thumb-xanh-600x600.jpg',
    price: '4690000',
    discount: type === 'bestseller' ? 5 + (index % 4) * 2 :
      type === 'suggested' ? 4 + (index % 5) * 2 :
        10 + (index % 5) * 2,
    remaining: 9 - (index % 5),
    total: 10,
  }))

  // Hàm chia mảng thành các nhóm
  const chunkArray = (arr, size) => {
    const chunked = []
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size))
    }
    return chunked
  }
  // Desktop: 12 item per slide (6x2)
  // Mobile/Tablet: 6 item per slide (3x2 hoặc 2x2)
  const getChunkSize = () => {
    if (window.innerWidth >= 1024) return row === 'double' ? 12 : 6 // lg trở lên
    if (window.innerWidth >= 768) return row === 'double' ? 6 : 3 // md
    return row === 'double' ? 4 : 2 // sm
  }

  const [chunkSize, setChunkSize] = React.useState(getChunkSize())

  React.useEffect(() => {
    const handleResize = () => setChunkSize(getChunkSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slides = chunkArray(products, chunkSize)

  return (
    <div>
      <div className='mb-5'>
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-product',
            prevEl: '.swiper-button-prev-product',
          }}
          loop={true}
          // autoplay={{ delay: 5000 }}
          className='relative'
        >
          {slides.map((group, index) => (
            <SwiperSlide key={index}>
              {row === 'double' ? (
                <div className='grid grid-rows-2 gap-4'>
                  <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                    {group.slice(0, chunkSize / 2).map((product) => (
                      <ProductItem key={product.id} product={product} />
                    ))}
                  </div>
                  <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                    {group.slice(chunkSize / 2, chunkSize).map((product) => (
                      <ProductItem key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                  {group.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Nút điều hướng trái */}
          <button className="swiper-button-prev-product absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-700 p-3 shadow-md rounded-full hover:bg-cyan-100 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Nút điều hướng phải */}
          <button className="swiper-button-next-product absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-700 p-3 shadow-md rounded-full hover:bg-cyan-100 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Swiper>
      </div>
    </div>
  )
}

export default ProductSlide
