import React, { useState } from 'react';
import { Accordion, AccordionItem, Checkbox, CheckboxGroup } from '@heroui/react';
import { ITEMS_FILTER } from 'constants/filter';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';

const ItemsFilter = () => {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  return (
    <div className="min-w-[250px] hidden md:block rounded-xl border border-gray-200 h-fit">
      <h2 className="text-[16px] font-semibold py-4 border-b border-gray-200 pl-3">Filter</h2>
      <Accordion className="p-0!">
        {ITEMS_FILTER.map((filter) => {
          if (filter.title === 'Color') {
            return (
              <AccordionItem
                key={filter.id}
                className="px-4! text-sm!"
                aria-label={filter.title}
                title={filter.title}
              >
                <ColorFilter />
              </AccordionItem>
            );
          }

          if (filter.title === 'Price') {
            return (
              <AccordionItem
                key={filter.id}
                className="px-4!"
                aria-label={filter.title}
                title={filter.title}
              >
                <PriceFilter />
              </AccordionItem>
            );
          }

          return (
            <AccordionItem
              key={filter.id}
              className="px-4!"
              aria-label={filter.title}
              title={filter.title}
            >
              <CheckboxGroup
                value={selectedNames.filter((name) =>
                  filter.items.some((item) => item.name === name),
                )}
                onValueChange={(values) => {
                  const updated = [
                    ...selectedNames.filter(
                      (name) => !filter.items.some((item) => item.name === name),
                    ),
                    ...values,
                  ];
                  setSelectedNames(updated);
                }}
              >
                {filter.items.map((item, index) => (
                  <Checkbox key={index} value={item.name}>
                    {item.name} ({item.amount})
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ItemsFilter;
