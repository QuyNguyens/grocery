import { Button } from '@heroui/button';
import ProductItemVertical from 'components/molecules/productItemVertical';
import Title from 'components/molecules/title';
import { PRODUCT_KEY } from 'constants/product';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import React, { useEffect, useState } from 'react';
import { fetchProductsByCollection } from 'stores/productSlice';
import ItemPagination from 'views/CollectionsScreen/components/ItemPagination';

const OurProduct = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.products.collections[PRODUCT_KEY.ourStore]);
  const totalPage = productState?.totalPages;
  const products = productState?.pages?.[currentPage || 1];

  useEffect(() => {
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.ourStore,
        page: currentPage,
        limit: 9,
        name: '',
      }),
    );
  }, [currentPage]);

  return (
    <div className="mt-10 flex flex-col justify-center items-center gap-5 p-4">
      <Title title="Don't Miss Our Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[380px]">
        {products?.map((product, index) => (
          <ProductItemVertical key={index} product={product} imageSize={100} isBorderImage={true} />
        ))}
      </div>
      <ItemPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </div>
  );
};

export default OurProduct;
