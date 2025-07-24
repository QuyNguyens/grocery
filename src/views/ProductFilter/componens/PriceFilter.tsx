import { Input } from '@heroui/input';
import React, { useCallback, useState } from 'react';

const PriceFilter = () => {
  const [price, setPrice] = useState<any>({
    lowestPrice: 10,
    highestPrice: 30,
  });

  const handlePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPrice((prev: any) => ({
        ...prev,
        [name]: Number(value),
      }));
    },
    [price],
  );

  return (
    <div className="flex flex-col gap-2">
      <p>
        The price from ${price.lowestPrice} to ${price.highestPrice}
      </p>
      <div className="flex gap-2 items-center">
        $
        <Input
          className="max-w-[92px]"
          value={price.lowestPrice}
          onChange={handlePrice}
          name="lowestPrice"
          type="number"
        />
        <Input
          className="max-w-[92px]"
          value={price.highestPrice}
          onChange={handlePrice}
          name="highestPrice"
          type="number"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
