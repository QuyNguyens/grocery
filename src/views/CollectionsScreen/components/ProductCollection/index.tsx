import { Button, Select, SelectItem } from '@heroui/react';
import { FILTER_BY } from 'constants/filter';
import React from 'react';
import { Bars4Icon, Bars3Icon, Bars2Icon } from '@heroicons/react/24/outline';
type ProductCollectionProps = {
  amount?: number;
  total: number;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
};

const options = [
  { value: 'grid-cols-4', icon: <Bars4Icon className="w-5 h-5 transform rotate-90" /> },
  { value: 'grid-cols-3', icon: <Bars3Icon className="w-5 h-5 transform rotate-90" /> },
  { value: 'grid-cols-2', icon: <Bars2Icon className="w-5 h-5 transform rotate-90" /> },
  { value: 'grid-cols-1', icon: <Bars3Icon className="w-5 h-5" /> },
];

const ProductCollection = ({
  amount,
  total,
  display,
  setDisplay,
  selectedOption,
  setSelectedOption,
}: ProductCollectionProps) => {
  return (
    <div className="w-full flex justify-end">
      <div className="flex gap-5 items-center">
        <p>
          {amount !== 0 && `${amount} of `}
          {total} products
        </p>
        <div className="hidden md:flex gap-4 items-center">
          <h4 className="whitespace-nowrap">Sort by:</h4>
          <Select
            className="min-w-[180px] w-full"
            onSelectionChange={(keys) => {
              const selected = Array.from(keys)[0] as string;
              setSelectedOption(selected);
            }}
            defaultSelectedKeys={[selectedOption]}
          >
            {Object.entries(FILTER_BY).map(([key, value]) => (
              <SelectItem key={value}>{value}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {options.map((opt, idx) => {
              const showOnlyOnLg = idx === 0 || idx === 1;

              return (
                <Button
                  key={idx}
                  isIconOnly
                  className={`
          bg-[#edf4f6] rounded 
          ${display === opt.value ? 'text-white! bg-green-500' : ''}
          ${showOnlyOnLg ? 'hidden lg:inline-flex' : ''}
        `}
                  onClick={() => setDisplay(opt.value)}
                >
                  {opt.icon}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCollection);
