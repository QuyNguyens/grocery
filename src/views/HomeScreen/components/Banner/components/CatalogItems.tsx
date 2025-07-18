import { Image } from '@heroui/image';
import { catalogItems } from 'constants/product';
import React from 'react';

const CatalogItems = () => {
  return (
    /* flex-nowrap để luôn nằm 1 hàng, gap-5 để tạo khoảng cách */
    <div className="flex flex-nowrap gap-5 w-full overflow-hidden">
      {catalogItems.map((item, index) => (
        <div
          key={index}
          className="
            shrink-0                          /* đừng co lại */
            group bg-white rounded-xl shadow-lg
            flex flex-col items-center justify-center
            py-5 gap-2

            /* 👇 chia đều bề rộng sau khi đã trừ gap */
            basis-[calc((100%-1.25rem)/2)]         /* mobile: 2 items */
            md:basis-[calc((100%-3.75rem)/4)]      /* md: 4 items */
            lg:basis-[calc((100%-5rem)/5)]         /* lg: 5 items */
            xl:basis-[calc((100%-6.25rem)/6)]      /* xl: 6 items */
          "
        >
          <Image
            alt="catalog item"
            src={item.image}
            width={45}
            height={45}
            className="transition-transform duration-700 ease-out transform-gpu [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
          />
          <span className="font-medium text-sm hover:text-green-500">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CatalogItems;
