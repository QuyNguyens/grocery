import { Button } from '@heroui/button';
import React from 'react';

type SelectOptionProps = {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

const SelectOption = ({ option, setOption }: SelectOptionProps) => {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      {['Milk Items', 'Vegetables', 'Bakery'].map((item, index) => (
        <Button
          key={index}
          onClick={() => setOption(item)}
          className={`${option === item ? 'bg-green-500 text-white!' : 'bg-[#EDF4F6]'} font-semibold rounded-full hover:bg-green-500 hover:text-white!`}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default React.memo(SelectOption);
