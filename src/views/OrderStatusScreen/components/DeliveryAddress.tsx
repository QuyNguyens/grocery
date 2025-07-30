import React, { useEffect, useState } from 'react';
import { type DeliveryAddress } from 'types/deliveryAddress';

const DeliveryAddress = () => {
  const [userAddress, setUserAddress] = useState<DeliveryAddress | undefined>(undefined);

  useEffect(() => {
    const userAddressStr = localStorage.getItem('user-address');
    if (userAddressStr) {
      const userAddress: DeliveryAddress = JSON.parse(userAddressStr);
      setUserAddress(userAddress);
    }
  }, []);

  return (
    <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold">Thông tin nhận hàng</h1>
      <div className="mt-3 flex flex-col gap-2">
        <p>
          <span className="font-semibold">Họ và tên: </span>
          {userAddress?.fullName}
        </p>
        <p>
          <span className="font-semibold">Số điện thoại: </span>
          {userAddress?.phone}
        </p>
        <p>
          <span className="font-semibold">Địa chỉ: </span>
          {userAddress?.detail}
        </p>
      </div>
    </div>
  );
};

export default DeliveryAddress;
