import { RATING_CUSTOMER } from 'constants/rating';
import React from 'react';
import RatingItem from './components/RatingItem';
import Title from 'components/molecules/title';

const RatingCustomer = () => {
  return (
    <div className="w-full max-w-[1200px]">
      <Title title="What Our Customers Says!" className="mt-5" />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RATING_CUSTOMER.map((customer, index) => (
          <RatingItem key={index} ratingCustomer={customer} />
        ))}
      </div>
    </div>
  );
};

export default RatingCustomer;
