import Authorization from "./pages/Authorization";
import Bucket from "./pages/Bucket";
import MainPage from "./pages/MainPage";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import { BUCKET_ROUTE, MAIN_PAGE_ROUTE, MENU_ROUTE, RESERVATION_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: RESERVATION_ROUTE,
        Component: Reservation
    },
    {
        path: BUCKET_ROUTE,
        Component: Bucket
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