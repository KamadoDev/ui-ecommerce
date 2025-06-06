import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { categories } from '../utils/data'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import clsx from 'clsx'

const Category = () => {
    const [openCat, setOpenCat] = useState(true)
    const [openIndex, setOpenIndex] = useState(null)
    const catRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                catRef.current &&
                !catRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setOpenCat(false)
                setOpenIndex(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const toggleCat = () => setOpenCat(prev => !prev)

    const toggleSubmenu = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className='col-span-12 md:col-span-3 w-full relative'>
            {/* Toggle button */}
            <button
                ref={buttonRef}
                onClick={toggleCat}
                className='w-full flex items-center cursor-pointer gap-2 px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition'
            >
                <FaBars />
                Categories
            </button>

            {/* Category menu */}
            {openCat && (
                <div
                    ref={catRef}
                    className='absolute left-0 top-full mt-2 w-full bg-white shadow-md border border-cyan-500 rounded-md fade-in z-50'
                >
                    <nav className="py-4">
                        <ul>
                            {categories.map((cat, index) => {
                                const hasChildren = cat.children && cat.children.length > 0
                                return (
                                    <li key={index} className="group relative">
                                        {hasChildren ? (
                                            // Nếu có submenu thì dùng div để xử lý toggle
                                            <div
                                                onClick={() => toggleSubmenu(index)}
                                                className="flex items-center cursor-pointer justify-between px-4 py-3 hover:bg-gray-100 transition text-sm"
                                            >
                                                <span>{cat.name}</span>
                                                <IoIosArrowForward
                                                    className={clsx(
                                                        'transition-transform',
                                                        openIndex === index && 'rotate-90',
                                                        'md:rotate-0'
                                                    )}
                                                />
                                            </div>
                                        ) : (
                                            // Nếu không có submenu thì NavLink bình thường
                                            <NavLink
                                                to={cat.path}
                                                className="block px-4 py-3 text-sm hover:bg-gray-100 transition"
                                            >
                                                {cat.name}
                                            </NavLink>
                                        )}

                                        {/* Submenu */}
                                        {hasChildren && (
                                            <ul
                                                className={clsx(
                                                    'px-3 md:px-0 md:absolute md:left-full md:top-0 md:w-48 md:bg-white md:shadow-md md:rounded-md md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-0 md:translate-x-2 md:invisible md:group-hover:visible md:transition-all md:duration-300 z-10',
                                                    openIndex === index ? 'block' : 'hidden',
                                                    'md:block'
                                                )}
                                            >
                                                {cat.children.map((subcat, idx) => (
                                                    <li key={idx}>
                                                        <NavLink
                                                            to={subcat.path}
                                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                                        >
                                                            {subcat.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Category
