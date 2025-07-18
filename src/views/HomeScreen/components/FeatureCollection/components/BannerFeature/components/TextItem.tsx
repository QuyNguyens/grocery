import { Button } from '@heroui/button';
import React from 'react';

type TextItemProps = {
  titleSmall?: string;
  titleLarge: string;
  flatSell?: string;
  buttonText?: string;
  buttonClassName?: string;
  className: string;
};

const TextItem = ({
  titleSmall,
  titleLarge,
  flatSell,
  buttonText,
  buttonClassName,
  className,
}: TextItemProps) => {
  return (
    <div className={`${className} flex h-full flex-col justify-center gap-2`}>
      {titleSmall && <span className="text-sm font-medium text-gray-600">{titleSmall}</span>}
      {flatSell && (
        <span className="text-sm font-semibold text-white bg-orange-500 rounded-full w-fit px-3 py-1">
          {flatSell}
        </span>
      )}
      <h1 className="text-xl font-semibold text-[#184363]">{titleLarge}</h1>
      {buttonText && (
        <Button className={`rounded-full font-semibold w-fit px-10 ${buttonClassName}`}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default TextItem;
