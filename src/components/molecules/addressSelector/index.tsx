'use client';

import { useState, useEffect, useMemo } from 'react';
import { Select, SelectItem } from '@heroui/react';
import { District, Province, Ward } from 'types/address';

interface AddressSelectorProps {
  data: Province[];
  onChange?: (value: { province?: Province; district?: District; ward?: Ward }) => void;
}

export function AddressSelector({ data, onChange }: AddressSelectorProps) {
  const [selectedProvinceCode, setSelectedProvinceCode] = useState<string | undefined>();
  const [selectedDistrictCode, setSelectedDistrictCode] = useState<string | undefined>();
  const [selectedWardCode, setSelectedWardCode] = useState<string | undefined>();

  useEffect(() => {
    const address = localStorage.getItem('addressCode');
    if (address) {
      const addressCode = JSON.parse(address);
      setSelectedDistrictCode(addressCode.districtCode);
      setSelectedProvinceCode(addressCode.provinceCode);
      setSelectedWardCode(addressCode.wardCode);
    }
  }, []);

  const province = useMemo(() => {
    return data.find((p) => p.code.toString() === selectedProvinceCode);
  }, [data, selectedProvinceCode]);

  const district = useMemo(() => {
    return province?.districts.find((d) => d.code.toString() === selectedDistrictCode);
  }, [province, selectedDistrictCode]);

  const ward = useMemo(() => {
    return district?.wards.find((w) => w.code.toString() === selectedWardCode);
  }, [district, selectedWardCode]);

  useEffect(() => {
    onChange?.({ province, district, ward });
  }, [province, district, ward]);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex gap-4">
        <Select
          className="max-w-xs"
          label="Chọn tỉnh/thành phố"
          labelPlacement="outside"
          placeholder="Tỉnh/Thành"
          value={selectedProvinceCode}
          onChange={(e) => {
            setSelectedProvinceCode(e.target.value);
            setSelectedDistrictCode(undefined);
            setSelectedWardCode(undefined);
          }}
        >
          {data.map((p) => (
            <SelectItem key={p.code.toString()} textValue={p.name.toString()}>
              {p.name}
            </SelectItem>
          ))}
        </Select>

        <Select
          className="max-w-xs"
          label="Chọn quận/huyện"
          labelPlacement="outside"
          placeholder="Quận/Huyện"
          value={selectedDistrictCode}
          isDisabled={!province}
          onChange={(e) => {
            setSelectedDistrictCode(e.target.value);
            setSelectedWardCode(undefined);
          }}
        >
          {(province?.districts ?? []).map((d) => (
            <SelectItem key={d.code.toString()} textValue={d.name.toString()}>
              {d.name}
            </SelectItem>
          ))}
        </Select>
      </div>

      <Select
        label="Chọn phường/xã"
        labelPlacement="outside"
        placeholder="Phường/Xã"
        value={selectedWardCode}
        isDisabled={!district}
        onChange={(e) => {
          setSelectedWardCode(e.target.value);
          const addressCode = {
            provinceCode: selectedProvinceCode,
            districtCode: selectedDistrictCode,
            wardCode: e.target.value,
          };
          localStorage.setItem('addressCode', JSON.stringify(addressCode));
        }}
      >
        {(district?.wards ?? []).map((w) => (
          <SelectItem key={w.code.toString()} textValue={w.name.toString()}>
            {w.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
