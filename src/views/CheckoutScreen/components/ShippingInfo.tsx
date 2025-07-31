import { useState, useMemo, useRef, useEffect } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { AddressSelector } from 'components/molecules/addressSelector';
import { provinces } from 'constants/vietnamAddress';
import debounce from 'lodash.debounce';
import cartService from 'services/cart.service';
import { CartItem } from 'types/cart';
import { useUserContext } from 'context/AuthContext';
import { DeliveryAddress } from 'types/deliveryAddress';
import { CalculateDiscount } from 'utils/calculateDiscount';

type ShippingInfoProps = {
  cartItems: CartItem[];
  totalPrice: number;
};

const ShippingInfo = ({ cartItems, totalPrice }: ShippingInfoProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputsValue, setInputsValue] = useState({
    name: '',
    'phone-number': '',
    address: '',
  });

  const [addressSelected, setAddressSelected] = useState<any>({});
  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    location: '',
  });
  const { user } = useUserContext();

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

  const validate = (inputData: typeof inputsValue, selectedAddress: any) => {
    const newErrors = {
      name: '',
      phoneNumber: '',
      address: '',
      location: '',
    };

    if (!inputData.name.trim()) newErrors.name = 'Vui lòng nhập họ và tên';
    if (!inputData['phone-number'].trim()) newErrors.phoneNumber = 'Vui lòng nhập số điện thoại';
    if (!inputData.address.trim()) newErrors.address = 'Vui lòng nhập địa chỉ cụ thể';
    if (
      !selectedAddress?.ward?.name ||
      !selectedAddress?.district?.name ||
      !selectedAddress?.province?.name
    ) {
      newErrors.location = 'Vui lòng chọn đầy đủ tỉnh/thành, quận/huyện, phường/xã';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === '');
  };

  const handlePayment = async (e: any) => {
    e.preventDefault();
    const fullInputs = updateAllInputsFromDOM();
    const isValid = validate(fullInputs, addressSelected);

    if (isValid) {
      try {
        const userAddress: DeliveryAddress = {
          fullName: inputsValue.name,
          phone: inputsValue['phone-number'],
          province: addressSelected.province.name,
          district: addressSelected.district.name,
          ward: addressSelected.ward.name,
          detail: `${inputsValue.address}, ${addressSelected.ward.name}, ${addressSelected.district.name}, ${addressSelected.province.name}`,
          isDefault: true,
        };
        const newCartItem = cartItems.map((item) => {
          return { ...item, price: CalculateDiscount(item.price, item.discount.value) };
        });
        const res = await cartService.payment(
          user?._id,
          totalPrice + totalPrice / 10 + 5,
          newCartItem,
          userAddress,
        );
        if (res.data.success) {
          localStorage.setItem('user-address', JSON.stringify(userAddress));
          window.location.href = res.data.data;
        }
      } catch (error) {
        console.error('lỗi khi thanh toán');
      }
    } else {
      console.log('Có lỗi trong form');
    }
  };

  return (
    <form ref={formRef} className="flex-1 flex flex-col gap-6 p-4 shadow-2xl rounded-lg">
      <h1 className="text-center font-semibold text-2xl mb-4">Shipping Information</h1>

      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            labelPlacement="outside"
            name="name"
            label="Họ và tên"
            type="text"
            placeholder="Nhập họ và tên..."
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-red-500! text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="flex-1">
          <Input
            labelPlacement="outside"
            label="Số điện thoại"
            name="phone-number"
            type="tel"
            placeholder="Nhập số điện thoại..."
            onChange={handleInputChange}
          />
          {errors.phoneNumber && <p className="text-red-500! text-sm mt-1">{errors.phoneNumber}</p>}
        </div>
      </div>

      <div>
        <AddressSelector
          data={provinces}
          onChange={(address) => {
            const allInputs = updateAllInputsFromDOM();
            setAddressSelected(address);
          }}
        />
        {errors.location && <p className="text-red-500! text-sm mt-1">{errors.location}</p>}
      </div>

      <div>
        <Input
          labelPlacement="outside"
          label="Địa chỉ cụ thể"
          name="address"
          type="text"
          placeholder="Nhập địa chỉ cụ thể..."
          onChange={handleInputChange}
        />
        {errors.address && <p className="text-red-500! text-sm mt-1">{errors.address}</p>}
      </div>

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
          onClick={handlePayment}
        >
          Payment
        </Button>
      </div>
    </form>
  );
};

export default ShippingInfo;
