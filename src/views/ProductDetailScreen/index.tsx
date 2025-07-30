'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ImageSlider from './components/ImageSlider';
import ItemDetail from './components/ItemDetail';
import { ProductVariant } from 'types/product';
import ProductVariantServices from 'services/productVariant.service';
import { Divider } from '@heroui/react';
import Review from './components/Review';

const ProductDetailScreen = () => {
  const params = useParams();
  const [productVariant, setProductVariant] = useState<ProductVariant | undefined>(undefined);
  const [imageMain, setImageMain] = useState<number>(0);

  useEffect(() => {
    const fetchProductVariant = async () => {
      try {
        const segments = params?.detail?.toString().split('/');
        const lastSegment = segments?.[segments.length - 1];
        const res = await ProductVariantServices.getByProductId(lastSegment || '');

        if (res?.data.success) {
          setProductVariant(res.data.data);
        }
      } catch (error) {}
    };
    fetchProductVariant();
  }, []);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            {productVariant?.images && (
              <ImageSlider
                imageMain={imageMain}
                images={productVariant.images}
                setImageMain={setImageMain}
              />
            )}
          </div>
          <div className="w-full md:w-1/2">
            {productVariant && <ItemDetail product={productVariant} />}
          </div>
        </div>
        <Divider className="m-10" />
        {productVariant && <Review productVariant={productVariant} />}
      </div>
    </div>
  );
};

export default ProductDetailScreen;
