'use client';

import React, { useEffect } from 'react';
import Banner from './components/Banner';
import FeatureCollection from './components/FeatureCollection';
import ShopByDepartment from './components/ShopByDepartment';
import BestSellingProduct from './components/BestSellingProduct';
import RatingCustomer from './components/RatingCustomer';
import OurProduct from './components/OurProduct';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { fetchProductsByCollection } from 'stores/productSlice';
import { PRODUCT_KEY } from 'constants/product';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.categories,
        page: 1,
        limit: 8,
        name: 'Vegetables',
      }),
    );
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.bestSelling,
        page: 1,
        limit: 8,
        name: '',
      }),
    );
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.topDeal,
        page: 1,
        limit: 8,
        name: '',
      }),
    );
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.special,
        page: 1,
        limit: 8,
        name: '',
      }),
    );
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.ourStore,
        page: 1,
        limit: 9,
        name: '',
      }),
    );
  }, []);

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
