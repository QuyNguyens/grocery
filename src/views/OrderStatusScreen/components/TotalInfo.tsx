import React from 'react';

type TotalInfoProps = {
  totalPrice: number;
  shippingFee: number;
};

const TotalInfo = ({ totalPrice, shippingFee }: TotalInfoProps) => {
  return (
    <div className="w-1/2 flex flex-col bg-white shadow-lg rounded-lg p-6">
      <div className="w-full flex justify-between font-semibold py-3 border-b border-gray-200">
        <h4>Subtotal</h4>
        <h4>${totalPrice}.00</h4>
      </div>
      <div className="w-full flex justify-between font-semibold py-3 border-b border-gray-200">
        <h4>Tax</h4>
        <h4>${totalPrice / 10}.00</h4>
      </div>
      <div className="w-full flex justify-between font-semibold py-3 border-b border-gray-200">
        <div>
          <span className="text-gray-400 font-normal">Shipping</span>
          <p className="text-xs text-gray-400! font-normal">Ground shipping (3-5 business days)</p>
        </div>
        <h4 className="text-gray-400! font-normal">${shippingFee}.00</h4>
      </div>
      <div className="w-full flex justify-between font-semibold py-3">
        <h4>Total due</h4>
        <h4>${totalPrice + totalPrice / 10 + 5}.00</h4>
      </div>
    </div>
  );
};

export default TotalInfo;
