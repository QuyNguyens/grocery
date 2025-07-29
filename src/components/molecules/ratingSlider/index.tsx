import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

type RatingSliderProps = {
  number: number;
  amount: number;
};

const RatingSlider = ({ number, amount }: RatingSliderProps) => {
  return (
    <div className="w-full flex items-center gap-5">
      <div className="flex gap-3 items-center">
        <span>{number}</span>
        <StarIcon className="w-4 h-4 text-orange-300" />
      </div>
      <div
        className={`${amount > 0 ? 'bg-orange-300' : 'bg-[#EDEDED]'} rounded-full h-2 flex-1`}
      ></div>
      <span>{amount}</span>
    </div>
  );
};

export default RatingSlider;
