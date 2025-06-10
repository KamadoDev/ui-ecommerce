import React from 'react'
import { NavLink } from 'react-router-dom'
import { formatCurrency, getOldPrice, parsePriceStringToNumber } from '../utils/price'

const ProductItem = ({ product }) => {
    const price = parsePriceStringToNumber(product.price)
    const oldPrice = getOldPrice(price, product.discount)

    return (
        <div className='product-item p-2 w-full rounded-md border border-gray-300 hover:shadow-lg transition-all group bg-white'>
            <NavLink to="#" className="block">
                {/* Hình ảnh */}
                <div className="relative w-full h-full overflow-visible">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                    />
                </div>

                {/* Tên sản phẩm */}
                <h3 className="mt-2 text-sm text-black font-medium transition-colors duration-300 group-hover:text-blue-500 line-clamp-2">
                    {product.name}
                </h3>

                {/* Giá sản phẩm */}
                <div className="mt-1 text-sm font-semibold text-red-600">
                    {formatCurrency(price)}
                </div>

                {/* Giá gốc và giảm giá */}
                {product.discount > 0 && (
                    <div className='flex items-center gap-2 text-xs mt-1'>
                        <p className="text-gray-400 line-through">{formatCurrency(oldPrice)}</p>
                        <p className="text-red-500">-{product.discount}%</p>
                    </div>
                )}

                {/* Số suất còn lại */}
                <div className="mt-2 w-full text-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    🔥 Còn {product.remaining || '9/10'} suất
                </div>

                {/* Nút mua ngay */}
                <div className="mt-2">
                    <button className="w-full text-sm bg-blue-100 text-blue-600 font-medium py-1 rounded hover:bg-blue-200 transition">
                        Mua ngay
                    </button>
                </div>
            </NavLink>
        </div>
    )
}

export default ProductItem
