import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {Breeds} from '@pages/DashBoard/Breeds/Breeds';
import {Home} from '@pages/DashBoard/Home/Home';
import {Images} from '@pages/DashBoard/Images/Images';
import {Breed} from "@pages/DashBoard/Breeds/Breed/Breed";

export const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/breeds/:id" element={<Breed />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="images" element={<Images />} />
            <Route path="*" element={<Home />} />
            {/*<Route path="*" element={<Breeds />} />*/}
        </Routes>);

};