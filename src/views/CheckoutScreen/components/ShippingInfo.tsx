import { useState, useMemo, useRef } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { AddressSelector } from 'components/molecules/addressSelector';
import { provinces } from 'constants/vietnamAddress';
import debounce from 'lodash.debounce';

const ShippingInfo = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [addressSelected, setAddressSelected] = useState<any>({});
  const [inputsValue, setInputsValue] = useState({
    name: '',
    'phone-number': '',
    address: '',
  });

  const debouncedSetInputsValue = useMemo(
    () =>
      debounce((name: string, value: string) => {
        setInputsValue((prev) => ({
          ...prev,
          [name]: value,
        }));
      }, 300),
    [],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    debouncedSetInputsValue(name, value);
  };

  const updateAllInputsFromDOM = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newValues = {
        name: formData.get('name')?.toString() || '',
        'phone-number': formData.get('phone-number')?.toString() || '',
        address: formData.get('address')?.toString() || '',
      };
      setInputsValue(newValues);
      return newValues;
    }
    return inputsValue;
  };

  return (
    <form ref={formRef} className="flex-1 flex flex-col gap-6 p-4 shadow-2xl rounded-lg">
      <h1 className="text-center font-semibold text-2xl mb-5">Shipping Information</h1>

      <div className="flex gap-4">
        <Input
          labelPlacement="outside"
          name="name"
          label="Họ và tên"
          type="text"
          placeholder="Nhập họ và tên..."
          onChange={handleInputChange}
        />
        <Input
          labelPlacement="outside"
          label="Số điện thoại"
          name="phone-number"
          type="tel"
          placeholder="Nhập số điện thoại..."
          onChange={handleInputChange}
        />
      </div>

      <AddressSelector
        data={provinces}
        onChange={(address) => {
          const allInputs = updateAllInputsFromDOM();
          setAddressSelected(address);
        }}
      />

      <Input
        labelPlacement="outside"
        label="Địa chỉ cụ thể"
        name="address"
        type="text"
        placeholder="Nhập địa chỉ cụ thể..."
        onChange={handleInputChange}
      />

      {addressSelected?.ward && inputsValue.address && (
        <p className="text-sm leading-6">
          <span className="font-semibold">Địa chỉ nhận hàng: </span>
          <span className="font-semibold text-black!">
            {inputsValue.name} (+84) {inputsValue['phone-number']}
          </span>
          , {inputsValue.address}, {addressSelected.ward.name}, {addressSelected.district.name},{' '}
          {addressSelected.province.name}
        </p>
      )}

      <div className="w-full flex-1 flex items-end">
        <Button
          fullWidth
          className="rounded-md bg-blue-500 text-white! font-semibold"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            const fullInputs = updateAllInputsFromDOM();
            console.log('Submit:', fullInputs, addressSelected);
          }}
        >
          Payment
        </Button>
      </div>
    </form>
  );
};

export default ShippingInfo;
