import { Button } from '@heroui/button';
import React from 'react';

const TextItem = () => {
  return (
    <div className="flex w-2/5 h-full flex-col justify-center gap-4 pl-12 md:pl-16 lg:pl-24 xl:pl-32 pt-5">
      <span className="text-sm font-medium text-gray-600">Pyridoxine Vitamin B6</span>
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#184363] leading-6 md:leading-8 lg:leading-10 xl:leading-14">
        100% Natural & Organic Fruit Juice
      </h1>
      <Button className="bg-white rounded-full font-semibold text-[#184363] w-fit px-10">
        But it Now
      </Button>
    </div>
  );
};

export default TextItem;
