import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes } from "../routes/routes";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={route.Component}
                    key={route.path}
                    exact={route.exact}
                />
            ))}
            <Route path="*" element={<Navigate replace to="/notfound" />} />
        </Routes>
    );
};

export default AppRouter;
