'use client';

import React, { useEffect, useState } from 'react';
import ProductItemVertical from 'components/molecules/productItemVertical';
import ProductItem, { Product } from 'components/molecules/productItem';
import ItemsFilter from './componens/ItemsFilter';
import ProductDisplay from './componens/ProductDisplay';

type ProductFilterProps = {
  products: Product[];
};
const ProductFilter = ({ products }: ProductFilterProps) => {
  const [display, setDisplay] = useState<string>('grid-cols-4');
  const [amount, setAmount] = useState<number>(10);
  const [total, setTotal] = useState<number>(34);
  const [isAutoLayout, setIsAutoLayout] = useState(true);

  useEffect(() => {
    const updateDisplay = () => {
      if (!isAutoLayout) return;

      if (window.matchMedia('(min-width: 1400px)').matches) {
        setDisplay('grid-cols-4');
      } else if (window.matchMedia('(min-width: 1200px)').matches) {
        setDisplay('grid-cols-3');
      } else if (window.matchMedia('(min-width: 1024px)').matches) {
        setDisplay('grid-cols-2');
      } else if (window.matchMedia('(min-width: 750px)').matches) {
        setDisplay('grid-cols-3');
      } else if (window.matchMedia('(min-width: 430px)').matches) {
        setDisplay('grid-cols-2');
      } else {
        setDisplay('grid-cols-1');
      }
    };

    updateDisplay();
    window.addEventListener('resize', updateDisplay);
    return () => window.removeEventListener('resize', updateDisplay);
  }, [isAutoLayout]);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px] flex gap-8">
        <ItemsFilter />
        <div className="flex-1">
          <ProductDisplay
            amount={amount}
            total={total}
            display={display}
            setDisplay={(val) => {
              setIsAutoLayout(false);
              setDisplay(val);
            }}
          />
          <div className={`grid ${display} gap-5 mt-6`}>
            {products.map((product, index) => {
              if (display === 'grid-cols-1') {
                return (
                  <ProductItemVertical
                    key={index}
                    product={product}
                    imageSize={238}
                    isBorderImage={true}
                    isTitle={true}
                    isAddToCart={true}
                  />
                );
              }
              return <ProductItem key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
