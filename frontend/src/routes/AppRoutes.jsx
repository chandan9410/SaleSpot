import React from "react";
import { Routes, Route } from "react-router-dom";
import SalesPage from "../pages/SalesPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SalesPage />} />
        </Routes>
    );
};

export default AppRoutes;
