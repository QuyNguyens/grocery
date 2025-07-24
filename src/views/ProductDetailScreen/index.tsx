'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ImageSlider from './components/ImageSlider';
import ItemDetail from './components/ItemDetail';
import { products } from 'constants/product';

const ProductDetailScreen = () => {
  const params = useParams();
  const [imageMain, setImageMain] = useState<string>(
    'https://demo-grocy-01.myshopify.com/cdn/shop/files/15_04.jpg?v=1719656226&width=713',
  );

  useEffect(() => {
    console.log('params: ', params?.detail);
  }, []);
  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <ImageSlider
              imageMain={imageMain}
              images={[
                'https://demo-grocy-01.myshopify.com/cdn/shop/files/15_03.jpg?v=1719656226&width=208',
                'https://demo-grocy-01.myshopify.com/cdn/shop/files/15_04.jpg?v=1719656226&width=124',
                'https://demo-grocy-01.myshopify.com/cdn/shop/files/15_03.jpg?v=1719656226&width=208',
                'https://demo-grocy-01.myshopify.com/cdn/shop/files/15_03.jpg?v=1719656226&width=208',
                'https://demo-grocy-01.myshopify.com/cdn/shop/files/15_03.jpg?v=1719656226&width=208',
                'https://demo-grocy-01.myshopify.com/cdn/shop/files/15_04.jpg?v=1719656226&width=124',
                'https://demo-grocy-01.myshopify.com/cdn/shop/files/15_05.jpg?v=1719656226&width=124',
              ]}
              setImageMain={setImageMain}
            />
          </div>
          <div className="w-full md:w-1/2">
            <ItemDetail product={products[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
