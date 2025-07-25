'use client';

import React, { useEffect } from 'react';
import Banner from './components/Banner';
import FeatureCollection from './components/FeatureCollection';
import ShopByDepartment from './components/ShopByDepartment';
import BestSellingProduct from './components/BestSellingProduct';
import RatingCustomer from './components/RatingCustomer';
import OurProduct from './components/OurProduct';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { fetchProductsByCollection } from 'stores/productSlice';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const bestSelling = useAppSelector((state) => state.products.collections['categories']);

  useEffect(() => {
    dispatch(
      fetchProductsByCollection({
        collectionKey: 'categories',
        page: 1,
        limit: 10,
        categoryId: '688213d424ed47805043965b',
      }),
    );
  }, []);

  console.log('bestSelling: ', bestSelling);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
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
