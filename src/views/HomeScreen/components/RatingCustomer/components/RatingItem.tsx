'use client';

import { Avatar } from '@heroui/react';
import React from 'react';
import StarRatings from 'react-star-ratings';
import { RatingCustomerType } from 'types/ratingCustomer';

export type RatingItemProps = {
  ratingCustomer: RatingCustomerType;
};

const RatingItem = ({ ratingCustomer }: RatingItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white p-8 rounded-2xl">
      <StarRatings
        rating={ratingCustomer.rating}
        starRatedColor="#f2971f"
        starEmptyColor="#d1d5db"
        numberOfStars={5}
        starDimension="24px"
        starSpacing="2px"
      />
      <p className="text-center text-[#184363] text-[15px]">{ratingCustomer.comment}</p>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <Avatar className="w-20 h-20 text-large" src={ratingCustomer.avatar} />
        <span className="font-bold text-[#184363] text-sm">{ratingCustomer.name}</span>
      </div>
    </div>
  );
};

export default RatingItem;
