'use client';

import React, { useEffect, useState } from 'react';
import ProductItemVertical from 'components/molecules/productItemVertical';
import ProductItem from 'components/molecules/productItem';
import ItemsFilter from './componens/ItemsFilter';
import ProductDisplay from './componens/ProductDisplay';
import { Product } from 'types/product';
import { Button, Pagination } from '@heroui/react';

type ProductFilterProps = {
  products: Product[];
  currentPage: number;
  totalPage: number;
  totalProducts: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const ProductFilter = ({ products, currentPage, totalPage,totalProducts, setCurrentPage }: ProductFilterProps) => {
  const [display, setDisplay] = useState<string>('grid-cols-4');
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
            amount={products.length}
            total={totalProducts}
            display={display}
            setDisplay={(val) => {
              setIsAutoLayout(false);
              setDisplay(val);
            }}
          />
          <div className="flex flex-col gap-5">
            <div className={`grid ${display} gap-5 mt-6 overflow-y-auto max-h-[105vh]`}>
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
            <div className="flex flex-col gap-5">
              <Pagination
                color="success"
                page={currentPage}
                total={totalPage}
                onChange={setCurrentPage}
              />
              <div className="flex gap-2">
                <Button
                  color="success"
                  size="sm"
                  variant="flat"
                  onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                >
                  Previous
                </Button>
                <Button
                  color="success"
                  size="sm"
                  variant="flat"
                  onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
