import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {Breeds} from '@pages/DashBoard/Breeds/Breeds';
import {Home} from '@pages/DashBoard/Home/Home';
import {Images} from '@pages/DashBoard/Images/Images';

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="images" element={<Images />} />
            {/*<Route path="*" element={<Breeds />} />*/}
        </Routes>);

};