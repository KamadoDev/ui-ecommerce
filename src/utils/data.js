export const menus = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/contact',
        name: 'Contact'
    },
    {
        path: '/about',
        name: 'About'
    },
    {
        path: '/signup',
        name: 'Sign Up'
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
