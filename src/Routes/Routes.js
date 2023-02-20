import Root from "../Root/Root";
import { createBrowserRouter } from "react-router-dom";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Courses/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        { 
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/about',
            element: <AboutUs></AboutUs>
        },
        {
            path:'/courses',
            element:<Courses></Courses>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/cart',
            element:<Cart></Cart>
        },
        {
            path:'/wishlist',
            element:<Wishlist></Wishlist>
        }
    ]
  },
]);
