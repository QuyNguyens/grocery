'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import ProductItemVertical from 'components/molecules/productItemVertical';
import ProductItem from 'components/molecules/productItem';
import ItemsFilter from './components/ItemFilter';
import ProductCollection from './components/ProductCollection';
import { fetchProductsByCollection } from 'stores/productSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { useParams } from 'next/navigation';
import { PRODUCT_KEY } from 'constants/product';
import ItemPagination from './components/ItemPagination';
import { filterByPrice, filterBySelect, getFilteredProducts } from './components/productFiltered';
import { PriceType } from './components/ItemFilter/components/PriceFilter';
import { FILTER_BY } from 'constants/filter';

const CollectionScreen = () => {
  const [display, setDisplay] = useState<string>('grid-cols-4');
  const [isAutoLayout, setIsAutoLayout] = useState(true);
  const [productKey, setProductKey] = useState<string>(PRODUCT_KEY.categories);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [color, setColor] = useState<string>('');
  const [price, setPrice] = useState<PriceType>({
    lowestPrice: 50,
    highestPrice: 1000,
  });
  const [selectedOption, setSelectedOption] = useState<string>(FILTER_BY.aToZ);

  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const productState = useAppSelector((state) => state.products.collections[productKey]);

  const totalPage = productState?.totalPages || 1;
  const [currentPage, setCurrentPage] = useState<number>(productState?.currentPage || 1);
  const totalProducts = productState?.totalItems;
  const products = productState?.pages?.[currentPage] || [];

  const dispatch = useAppDispatch();
  const prevSlug = useRef<string | undefined>(undefined);

  useEffect(() => {
    const hasSlugChanged = slug !== prevSlug.current;

    let slugKey = slug;
    let newProductKey = productKey;
    if (slug === PRODUCT_KEY.special || slug === PRODUCT_KEY.ourStore) {
      setProductKey(slug);
      newProductKey = slug;
      slugKey = '';
    }
    dispatch(
      fetchProductsByCollection({
        collectionKey: newProductKey,
        page: currentPage,
        limit: 8,
        name: slugKey || '',
        force: hasSlugChanged,
      }),
    );

    prevSlug.current = slug;

    if (hasSlugChanged) {
      setCurrentPage(1);
    }
  }, [slug, currentPage]);

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

  const filterProducts = useMemo(() => {
    const filteredByNames = getFilteredProducts(products, selectedNames);
    const filterByPrices = filterByPrice(filteredByNames, price);
    const filterByOptions = filterBySelect(filterByPrices, selectedOption);
    return filterByOptions;
  }, [products, selectedNames, price, selectedOption]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px] flex gap-8">
        <ItemsFilter
          selectedNames={selectedNames}
          setSelectedNames={setSelectedNames}
          color={color}
          setColor={setColor}
          products={products}
          price={price}
          setPrice={setPrice}
        />
        <div className="flex-1">
          <ProductCollection
            amount={filterProducts.length}
            total={totalProducts || 0}
            display={display}
            setDisplay={(val) => {
              setIsAutoLayout(false);
              setDisplay(val);
            }}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <div className="flex flex-col gap-5">
            <div className={`grid ${display} gap-5 mt-6 overflow-y-auto max-h-[105vh]`}>
              {filterProducts?.map((product, index) => {
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
            <ItemPagination
              totalPage={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionScreen;
