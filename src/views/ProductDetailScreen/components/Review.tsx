import RatingComment from 'components/molecules/ratingComment';
import RatingSlider from 'components/molecules/ratingSlider';
import React, { useMemo } from 'react';
import { ProductVariant } from 'types/product';

type ReviewProps = {
  productVariant: ProductVariant;
};

const Review = ({ productVariant }: ReviewProps) => {
  const userRating = useMemo(() => {
    const ratingCount: Record<number, number> = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    productVariant?.userRating?.forEach((r) => {
      const rounded = Math.floor(r.rating);
      if (rounded >= 1 && rounded <= 5) {
        ratingCount[rounded]++;
      }
    });

    return [1, 2, 3, 4, 5].map((number) => ({
      number,
      amount: ratingCount[number],
    }));
  }, [productVariant]);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-1/3">
        <h1>Reviews</h1>
        <div className="mt-3 flex items-center gap-6 p-10 rounded-lg bg-[#F7F7F7]">
          <div>
            <p>
              <span className="text-4xl">{productVariant?.rating?.value}</span>/5
            </p>
            <p className="text-center text-sm">{productVariant?.rating?.total}</p>
            <p className="text-center text-sm">Reviews</p>
          </div>
          <div className="flex-1 flex flex-col">
            {userRating.map((r) => (
              <RatingSlider key={r.number} number={r.number} amount={r.amount} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto max-h-300">
        {productVariant?.userRating.map((rating, index) => (
          <RatingComment key={index} userRating={rating} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Review);
