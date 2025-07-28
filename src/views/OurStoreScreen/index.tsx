'use client';

import { PRODUCT_KEY } from 'constants/product';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import React, { useEffect, useState } from 'react';
import { fetchProductsByCollection } from 'stores/productSlice';
import ProductFilter from 'views/ProductFilter';

const OurStoreScreen = () => {
  const productState = useAppSelector((state) => state.products.collections[PRODUCT_KEY.ourStore]);
  const itemPerPage = productState?.totalPages || 1;
  const [currentPage, setCurrentPage] = useState<number>(productState?.currentPage || 1);
  const totalProducts = productState?.totalItems;
  const products = productState?.pages?.[currentPage] || [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.ourStore,
        page: currentPage,
        limit: 8,
        name: '',
      }),
    );
  }, [currentPage]);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px] flex gap-8">
        {products && (
          <ProductFilter
            totalProducts={totalProducts}
            totalPage={itemPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            products={products}
          />
        )}
      </div>
    </div>
  );
};

export default OurStoreScreen;
