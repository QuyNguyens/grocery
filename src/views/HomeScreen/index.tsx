'use client';

import React from 'react';
import Banner from './components/Banner';
import FeatureCollection from './components/FeatureCollection';
import ShopByDepartment from './components/ShopByDepartment';
import BestSellingProduct from './components/BestSellingProduct';
import RatingCustomer from './components/RatingCustomer';
import OurProduct from './components/OurProduct';

const HomeScreen = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[1200px]">
        <Banner />
        <FeatureCollection />
        <ShopByDepartment />
        <BestSellingProduct />
      </div>
      <div className="mt-10 w-full bg-[#f2ebd9] flex justify-center px-5 py-14">
        <RatingCustomer />
      </div>
      <div className="w-full max-w-[1200px]">
        <OurProduct />
      </div>
    </div>
  );
};

export default HomeScreen;
