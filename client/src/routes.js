import Authorization from "./pages/Authorization";
import Bucket from "./pages/Bucket";
import MainPage from "./pages/MainPage";
import Menu from "./pages/Menu";
import Orders from "./pages/adminPages/Orders";
import { BUCKET_ROUTE, MAIN_PAGE_ROUTE, MENU_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ORDERS_ROUTE, REVIEWS_ROUTE } from "./utils/consts";
import Reviews from "./pages/Reviews";

export const adminRoutes = [
    {
        path: ORDERS_ROUTE,
        Component: Orders
    }
]

export const authRoutes = [
    {
        path: BUCKET_ROUTE,
        Component: Bucket
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews
    }
]

export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage
    }, 
    {
        path: MENU_ROUTE,
        Component: Menu
    },
    {
        path: MENU_ROUTE + '/:id',
        Component: Menu
    },
    {
        path: LOGIN_ROUTE,
        Component: Authorization
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Authorization
    },
]