'use client';

import { Bars3Icon, ChevronDownIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { Button, Dropdown, DropdownTrigger, PopoverContent } from '@heroui/react';
import { ROUTES } from 'constants/routes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Item = {
  name: string;
  route?: string;
  children?: string[];
};

const items: Item[] = [
  { name: 'Our Store', route: 'our-store' },
  {
    name: 'Bakery',
    children: ['Biscuits', 'Cookies', 'Cake'],
  },
  { name: 'Vegetables' },
  {
    name: 'Snacks',
    children: ['Chips', 'Fries'],
  },
];

export default function Department() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const toggleItem = (name: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Button
          variant="light"
          radius="full"
          className="gap-2 px-2 bg-[#EDF4F6] hover:bg-[#EDF4F6]!"
          startContent={<Bars3Icon className="w-5 h-5" />}
          endContent={<ChevronDownIcon className="w-5 h-5" />}
        >
          Shop by Departments
        </Button>
      </DropdownTrigger>

      <PopoverContent className="px-2 w-full border-2 border-green-500 rounded-md shadow">
        <div className="flex w-full flex-col gap-1">
          {items.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between items-center border-b border-gray-300 px-2 py-2 group cursor-pointer">
                <span
                  onClick={() =>
                    router.push(`${ROUTES.collections}/${item?.route ? item.route : item.name}  `)
                  }
                  className="text-sm font-normal group-hover:text-green-500"
                >
                  {item.name}
                </span>
                {item.children && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(item.name);
                    }}
                    className="p-1 rounded group-hover:text-green-500"
                  >
                    {openItems[item.name] ? (
                      <MinusIcon className="w-3 h-3" />
                    ) : (
                      <PlusIcon className="w-3 h-3" />
                    )}
                  </button>
                )}
              </div>

              {item.children && openItems[item.name] && (
                <div>
                  {item.children.map((child) => (
                    <div
                      key={child}
                      onClick={() => router.push(`${ROUTES.collections}/${child}`)}
                      className="pl-5 border-b border-gray-300 px-2 py-2 text-sm font-normal text-default-600 hover:text-green-500 cursor-pointer"
                    >
                      {child}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Dropdown>
  );
}
