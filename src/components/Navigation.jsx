import React, { use, useEffect, useRef, useState } from 'react'
import { menus } from '../utils/data'
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('/')
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const userMenuRef = useRef(null)
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutSide)
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide)
        }
    }, [])

    return (
        <header className='border border-b-1 border-gray-300'>
            {/* header top */}
            <div className='header-top bg-black w-full p-4 md:p-3'>
                <div className='flex items-center justify-between flex-row gap-y-5'>
                    <div className='text-center text-white mx-auto text-xs md:text-sm'>
                        <p className='text-gray-200 '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            <span className='ml-2'><NavLink to="#" className='relative font-semibold after:absolute after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all after:-bottom-0.5 after:left-0 text-xs md:text-sm'>Shop Now</NavLink></span>
                        </p>
                    </div>
                    <div>
                        <select name="" id="" className='text-white text-xs md:text-sm bg-black border border-white rounded px-2 py-1'>
                            <option value="vi">Vietnam</option>
                            <option value="eng">English</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* header bottom */}
            <div className='header-bottom container mt-5 px-5 md:px-4 mx-auto'>
                <div className='relative w-full flex items-center justify-between py-3 bg-white'>
                    {/* Logo */}
                    <div className="logo">
                        <NavLink to="/" className='text-2xl font-bold text-gray-800'>GuangLi</NavLink>
                    </div>

                    {/* Menu - ẩn trên mobile */}
                    <nav className='hidden lg:block'>
                        <ul className="flex space-x-4">
                            {menus.map((menu, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={menu.path}
                                        className={({ isActive }) =>
                                            `px-4 py-2 rounded-md transition-colors duration-200 text-sm font-semibold ${isActive
                                                ? 'text-cyan-700 bg-cyan-100'
                                                : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50'
                                            }`
                                        }
                                    >
                                        {menu.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    {/* Search Box */}
                    <div className='relative hidden sm:flex items-center ml-4'>
                        <input
                            type="text"
                            placeholder="Search..."
                            className='md:w-70 lg:90 border border-gray-300 rounded-full py-1.5 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all'
                        />
                        <span className='absolute right-3 text-gray-500 text-lg'>
                            <CiSearch className='md:size-5 lg:size-6 cursor-pointer' />
                        </span>

                        {/* gợi ý tìm kiếm */}
                        {
                            suggestions.length > 0 &&
                            <div
                                className={`absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-50         overflow-hidden transition-all duration-300 transform
                            opacity-100 scale-100
                            `}
                            >
                                <ul className='text-sm text-gray-700 divide-y'>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>iPhone 15</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Áo khoác nam</li>
                                    <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Giày thể thao</li>
                                </ul>
                            </div>
                        }

                    </div>


                    {/* Actions */}
                    <div className="flex items-center gap-4 ml-4">
                        <div className='relative flex items-center' ref={userMenuRef}>
                            <button
                                onClick={() => setIsUserMenuOpen(prev => !prev)}
                                className='cursor-pointer hover:text-cyan-500 transition-all'
                            >
                                <FaRegUser className="sm:4 md:size-4 lg:size-5" />
                            </button>

                            <div
                                className={`
                                    absolute right-0 mt-2 w-40 top-full bg-white rounded-md shadow-lg z-50
                                    transition-all duration-300 origin-top transform
                                    ${isUserMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                                    `}
                            >
                                <ul className='text-sm font-semibold text-gray-700'>
                                    <li>
                                        <NavLink
                                            to='#'
                                            className='block px-4 py-2 transition-all hover:bg-gray-200'
                                            onClick={() => setIsUserMenuOpen(false)}
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="#"
                                            className="block px-4 py-2 transition-all hover:bg-gray-100"
                                            onClick={() => setIsUserMenuOpen(false)}
                                        >
                                            Đơn hàng
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                // Xử lý đăng xuất ở đây
                                                setIsUserMenuOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-2 transition-all hover:bg-gray-100"
                                        >
                                            Đăng xuất
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <NavLink to="#" className='text-gray-700 text-2xl hover:text-cyan-500 transition'>
                            <CiHeart className='sm:5 md:size-6 lg:size-7' />
                        </NavLink>
                        <NavLink to="#" className='text-gray-700 text-2xl hover:text-cyan-500 transition'>
                            <CiShoppingCart className=' sm:5 md:size-6 lg:size-7' />
                        </NavLink>

                        {/* Mobile menu toggle */}
                        <button
                            className="text-2xl text-gray-700 lg:hidden focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <HiOutlineX className='md:size-6' /> : <HiOutlineMenu className='md:size-6' />}
                        </button>
                    </div>

                    {/* Menu - ẩn trên desktop */}
                    {isMenuOpen && (
                        <nav className='lg:hidden absolute z-50 top-full left-0 w-full bg-white shadow-md p-4'>
                            {/* Search box on mobile */}
                            <div className="mb-4 relative">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm..."
                                    className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                                <span className="absolute right-4 top-2.5 text-gray-500">
                                    <CiSearch className="text-xl" />
                                </span>

                                {/* gợi ý tìm kiếm */}
                                {
                                    suggestions.length > 0 &&
                                    <div
                                        className={`absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-50         overflow-hidden transition-all duration-300 transform
                            opacity-100 scale-100
                            `}
                                    >
                                        <ul className='text-sm text-gray-700 divide-y'>
                                            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>iPhone 15</li>
                                            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Áo khoác nam</li>
                                            <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Giày thể thao</li>
                                        </ul>
                                    </div>
                                }
                            </div>

                            <ul className="flex flex-col space-y-3">
                                {menus.map((menu, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={menu.path}
                                            onClick={() => {
                                                setActiveLink(menu.path)
                                                setIsMenuOpen(prev => !prev)
                                            }}
                                            className={({ isActive }) =>
                                                `block w-full px-4 py-2 rounded-md transition-colors duration-200 ${isActive || activeLink === menu.path
                                                    ? 'text-cyan-700 bg-cyan-100'
                                                    : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50'
                                                }`
                                            }
                                        >
                                            {menu.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}


                </div>
            </div>
        </header>
    )
}

export default Navigation
