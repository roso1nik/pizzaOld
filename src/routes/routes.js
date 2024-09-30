import React from "react";
import { CART_ROUTE, ERROR_ROUTE, HOME_ROUTE } from "./consts";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home />,
    },
    {
        path: ERROR_ROUTE,
        Component: <NotFound />,
    },
    {
        path: CART_ROUTE,
        Component: <Cart />,
    },
];
