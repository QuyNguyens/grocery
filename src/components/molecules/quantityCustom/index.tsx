import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';

type QuantityCustomProps = {
  inStock: number;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

const QuantityCustom = ({ inStock, amount, setAmount }: QuantityCustomProps) => {
  const handleAmountMinus = () => {
    if (amount > 1) {
      setAmount((pre) => pre - 1);
    }
  };

  const handleAmountPlus = () => {
    if (amount < inStock) {
      setAmount((pre) => pre + 1);
    }
  };

  return (
    <div className="flex">
      <span className="flex items-center justify-center border border-gray-200 py-2 px-5">
        {amount}
      </span>
      <div className="flex flex-col">
        <div
          onClick={handleAmountMinus}
          className="flex items-center justify-center border border-gray-200 p-1"
        >
          <MinusIcon className="w-3 h-3" />
        </div>
        <div
          onClick={handleAmountPlus}
          className="flex items-center justify-center border border-gray-200 p-1"
        >
          <PlusIcon className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default QuantityCustom;
