import React, { useEffect, useRef, useState } from 'react';
import { menus } from '../utils/data';
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const userMenuRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            // Đóng userMenu nếu đang mở và click ngoài vùng userMenuRef
            if (isUserMenuOpen && userMenuRef.current && !userMenuRef.current.contains(e.target)) {
                setIsUserMenuOpen(false);
            }

            // Đóng mobileMenu nếu đang mở và click ngoài vùng menuRef
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isUserMenuOpen, isMenuOpen]); // thêm dependency để đảm bảo kiểm tra trạng thái hiện tại



    const renderSuggestions = () => (
        suggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-1 z-50 overflow-hidden transition-all duration-300 transform opacity-100 scale-100">
                <ul className="text-sm text-gray-700 divide-y">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">iPhone 15</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Áo khoác nam</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Giày thể thao</li>
                </ul>
            </div>
        )
    );

    return (
        <header className="border-b border-gray-300">
            {/* Top Banner */}
            <div className="bg-black p-4 md:p-3">
                <div className="flex items-center justify-between gap-y-5">
                    <div className="text-white mx-auto text-xs md:text-sm text-center">
                        <p>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            <span className="ml-2">
                                <NavLink to="#" className="font-semibold relative text-xs md:text-sm hover:underline text-cyan-500">Shop Now</NavLink>
                            </span>
                        </p>
                    </div>
                    <select className="text-white text-xs md:text-sm bg-black border border-white rounded px-2 py-1">
                        <option value="vi">Vietnam</option>
                        <option value="eng">English</option>
                    </select>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mt-5 px-5 md:px-4 mx-auto">
                <div className="relative w-full flex items-center justify-between py-3 bg-white">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold text-gray-800">GuangLi</NavLink>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:block">
                        <ul className="flex space-x-4">
                            {menus.map((menu, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={menu.path}
                                        className={({ isActive }) =>
                                            `px-4 py-2 rounded-md text-sm font-semibold transition duration-200 ${isActive ? 'text-cyan-700 bg-cyan-100' : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50'
                                            }`
                                        }
                                    >
                                        {menu.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Search (Desktop) */}
                    <div className="relative hidden sm:flex items-center ml-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="md:w-70 lg:w-90 border border-gray-300 rounded-full py-1.5 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                        />
                        <CiSearch className="absolute right-3 text-gray-500 text-lg md:size-5 lg:size-6 cursor-pointer" />
                        {renderSuggestions()}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 ml-4">
                        {/* User */}
                        <div className="relative flex items-center" ref={userMenuRef}>
                            <button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                className="hover:text-cyan-500 transition-all"
                            >
                                <FaRegUser className="sm:size-4 md:size-4 lg:size-5" />
                            </button>

                            <div
                                className={`absolute left-1/2 top-full mt-2 w-40 -translate-x-1/2 bg-white rounded-md shadow-lg z-50 transition-all duration-300 origin-top transform
                                    ${isUserMenuOpen
                                        ? 'opacity-100 scale-100 translate-y-0'
                                        : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                                    }`}
                            >
                                <ul className="text-sm font-semibold text-gray-700">
                                    <li>
                                        <NavLink to="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsUserMenuOpen(false)}>
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsUserMenuOpen(false)}>
                                            Đơn hàng
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button onClick={() => setIsUserMenuOpen(false)} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                            Đăng xuất
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Heart + Cart */}
                        <NavLink to="#" className="text-gray-700 text-2xl hover:text-cyan-500 transition">
                            <CiHeart className="sm:size-5 md:size-6 lg:size-7" />
                        </NavLink>
                        <NavLink to="#" className="text-gray-700 text-2xl hover:text-cyan-500 transition">
                            <CiShoppingCart className="sm:size-5 md:size-6 lg:size-7" />
                        </NavLink>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="text-2xl text-gray-700 lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <HiOutlineX className="md:size-6" /> : <HiOutlineMenu className="md:size-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {/* Mobile Menu with animation */}
                    <nav
                        ref={menuRef}
                        className={`lg:hidden absolute z-50 top-full left-0 w-full bg-white shadow-md p-4 transition-all duration-300 transform origin-top
    ${isMenuOpen
                                ? 'opacity-100 scale-100 translate-y-0'
                                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                            }`}
                    >
                        {/* Search Box Mobile */}
                        <div className="mb-4 relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                            <CiSearch className="absolute right-4 top-2.5 text-gray-500 text-xl" />
                            {renderSuggestions()}
                        </div>

                        {/* Menu List */}
                        <ul className="flex flex-col space-y-3">
                            {menus.map((menu, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={menu.path}
                                        onClick={() => {
                                            setActiveLink(menu.path);
                                            setIsMenuOpen(false);
                                        }}
                                        className={({ isActive }) =>
                                            `block w-full px-4 py-2 rounded-md transition duration-200 ${isActive || activeLink === menu.path
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
                </div>
            </div>
        </header>
    );
};

export default Navigation;
