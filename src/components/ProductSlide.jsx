import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import ProductItem from './ProductItem'

// Fake danh sách 24 sản phẩm
const products = Array.from({ length: 24 }, (_, index) => ({
  id: index + 1,
  name: `Sản phẩm ${index + 1}`,
  image: '/images/iPhone-14-plus-thumb-xanh-600x600.jpg',
  price: '4690000',
  discount: 10 + (index % 5) * 2,
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

const ProductSlide = () => {
  // Desktop: 12 item per slide (6x2)
  // Mobile/Tablet: 6 item per slide (3x2 hoặc 2x2)
  const getChunkSize = () => {
    if (window.innerWidth >= 1024) return 12 // lg trở lên
    if (window.innerWidth >= 768) return 6 // md
    return 4 // sm
  }

  const [chunkSize, setChunkSize] = React.useState(getChunkSize())

  React.useEffect(() => {
    const handleResize = () => setChunkSize(getChunkSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slides = chunkArray(products, chunkSize)

  return (
    <section className='container px-4 mx-auto py-4'>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: '.swiper-button-next-product',
          prevEl: '.swiper-button-prev-product',
        }}
        loop={true}
        autoplay={{ delay: 4000 }}
        className='relative'
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}

        {/* Nút điều hướng */}
        <button className="swiper-button-prev-product absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 text-white p-2 rounded-full hover:bg-black/50">
          &#8592;
        </button>
        <button className="swiper-button-next-product absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 text-white p-2 rounded-full hover:bg-black/50">
          &#8594;
        </button>
      </Swiper>
    </section>
  )
}

export default ProductSlide
