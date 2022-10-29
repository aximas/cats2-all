import {Route, Routes} from 'react-router-dom';
import {Layout} from '../pages/DashBoard/Layout';
import React from 'react';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Layout />}>
            </Route>
        </Routes>
    )
}