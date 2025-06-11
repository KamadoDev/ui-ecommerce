export const menus = [
    {
        path: '/',
        name: 'Trang chủ'
    },
    {
        path: '/giam-gia',
        name: 'Giảm giá'
    },
    {
        path: '/ban-chay',
        name: 'Bán chạy'
    },
    {
        path: '/uu-dai',
        name: 'Ưu đãi'
    },
    {
        path: '/tin-tuc',
        name: 'Tin tức'
    },
]

export const categories = [
    {
        name: "Woman's Fashion",
        path: "/category/womans-fashion",
        children: [
            { name: "Dresses", path: "/category/womans-fashion/dresses" },
            { name: "Tops", path: "/category/womans-fashion/tops" },
            { name: "Skirts", path: "/category/womans-fashion/skirts" }
        ]
    },
    {
        name: "Electronics",
        path: "/category/electronics",
        children: [
            { name: "Phones", path: "/category/electronics/phones" },
            { name: "Laptops", path: "/category/electronics/laptops" }
        ]
    },
    {
        name: "Home & Lifestyle",
        path: "/category/home-lifestyle"
    },
    {
        name: "Health & Beauty",
        path: "/category/health-beauty"
    },
]

export const slideData = [
    {
        id: 1,
        title: 'Iphone 14 series',
        image: '/images/banner1.jpg',
        description: 'Up to 10% off Voucher',
        button: 'Shop Now'
    },
    {
        id: 2,
        title: 'Iphone 14 series',
        image: '/images/banner1.jpg',
        description: 'Up to 10% off Voucher',
        button: 'Shop Now'
    },
    {
        id: 3,
        title: 'Iphone 14 series',
        image: '/images/banner1.jpg',
        description: 'Up to 10% off Voucher',
        button: 'Shop Now'
    },
]

export const timeUnits = [
    { label: 'Ngày', value: '03' },
    { label: 'Giờ', value: '23' },
    { label: 'Phút', value: '19' },
    { label: 'Giây', value: '56' },
];

export const products = [
    {
        images: '/images/iPhone-14-plus-thumb-xanh-600x600.jpg',
        title: 'iPhone 14 Plus 128GB',
        description: 'Online',
        price: '13900000',
        discount: '14900000',
        count: '10'
    }
]
