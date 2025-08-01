import { Input } from '@heroui/input';
import { Divider } from '@heroui/react';
import ProductItem from 'components/molecules/productItem';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import productServices from 'services/product.service';
import { Product } from 'types/product';
import debounce from 'lodash/debounce';
import type { DebouncedFunc } from 'lodash';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [productsFiltered, setProductsFiltered] = useState<Product[] | undefined>(undefined);

  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedSearch: DebouncedFunc<(value: string) => void> = useMemo(
    () =>
      debounce((value: string) => {
        (async () => {
          try {
            if (value.trim() === '') return;
            const res = await productServices.filter(value);
            if (res.data.success) {
              setProductsFiltered(res.data.data);
            }
          } catch (error) {
            console.error('Lỗi khi tìm kiếm sản phẩm: ', error);
          }
        })();
      }, 1000),
    [],
  );

  useEffect(() => {
    debouncedSearch(inputValue);

    return () => {
      debouncedSearch.cancel();
    };
  }, [inputValue, debouncedSearch]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={inputRef}>
      <div className="flex border-2 border-green-500 rounded-full overflow-hidden cursor-text">
        <Input
          fullWidth
          placeholder="Search for items..."
          type="text"
          radius="none"
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          className="border-none outline-none focus:outline-none focus:border-none"
        />
        <div className="flex items-center justify-center px-4 py-2 bg-green-600 text-white!">
          <span className="font-bold text-white!">Search</span>
        </div>
      </div>

      {isFocused && inputValue.trim().length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border p-3 border-gray-200 shadow-md rounded-md mt-1 z-50 overflow-y-auto">
          <h3>Products</h3>
          <Divider className="my-3" />
          {productsFiltered && productsFiltered.length > 0 ? (
            <div className="grid grid-cols-4 gap-2">
              {productsFiltered.map((item, idx) => (
                <ProductItem
                  key={idx}
                  product={item}
                  isChooseOption={false}
                  textSize="text-xs!"
                  isRating={false}
                />
              ))}
            </div>
          ) : (
            <div className="px-4 py-2 text-gray-500 w-full">Không tìm thấy sản phẩm</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
