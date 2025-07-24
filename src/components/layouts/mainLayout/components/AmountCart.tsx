import React from 'react';

const AmountCart = ({ amount }: { amount: number }) => {
  return (
    <div className="w-4 h-4 rounded-full bg-green-500 text-white! flex items-center justify-center text-[10px]">
      {amount}
    </div>
  );
};

export default AmountCart;
