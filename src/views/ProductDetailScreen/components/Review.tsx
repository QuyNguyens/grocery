import { Button } from '@heroui/button';
import { Textarea } from '@heroui/input';
import { addToast } from '@heroui/react';
import RatingComment from 'components/molecules/ratingComment';
import RatingSlider from 'components/molecules/ratingSlider';
import { useUserContext } from 'context/AuthContext';
import React, { useEffect, useMemo, useState } from 'react';
import StarRatings from 'react-star-ratings';
import reviewService from 'services/review.service';
import { ProductVariant } from 'types/product';
import { UserRating } from 'types/ratingCustomer';

type ReviewProps = {
  productVariant: ProductVariant;
};

const Review = ({ productVariant }: ReviewProps) => {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>('');
  const { user } = useUserContext();
  const [userDataRating, setUserDataRating] = useState<any | undefined>(undefined);
  const [userRatings, setUserRatings] = useState<UserRating[]>(productVariant.userRating || []);

  const isRating = useMemo(() => {
    return userRatings.some((item) => item.userId === user?._id);
  }, [userRatings, user?._id]);

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

  useEffect(() => {
    if (userDataRating) {
      const newUserRating: UserRating = {
        avatar: user?.avatar || '',
        userId: user?._id,
        rating: userDataRating.rating,
        comment: userDataRating.comment,
        name: user?.name,
        createdAt: new Date(),
      };

      setUserRatings((prev) => [...prev, newUserRating]);
      setUserDataRating(undefined);
    }
  }, [userDataRating]);

  const handleComment = async () => {
    if (user?._id) {
      const review = {
        userId: user?._id,
        productId: productVariant.productId,
        rating: rating,
        comment: comment,
      };

      try {
        const res = await reviewService.create(review);

        if (res.data.success) {
          if (res.data.data) {
            setUserDataRating(res.data.data);
          }
          addToast({
            title: 'Review',
            description: 'Đã đánh giá sản phẩm',
            color: 'success',
          });
        }
      } catch (error) {
        addToast({
          title: 'Review',
          description: 'Có lỗi khi đánh giá sản phẩm',
          color: 'danger',
        });
      }
    } else {
      addToast({
        title: 'Review',
        description: 'Vui lòng đăng nhập để đánh giá',
        color: 'warning',
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-1/3">
        <h1>Reviews</h1>
        <div className="mt-3 flex items-center gap-6 p-10 rounded-lg bg-[#F7F7F7]">
          <div>
            <p>
              <span className="text-4xl">{productVariant?.rating?.value.toFixed(1)}</span>/5
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
        {!isRating ? (
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex items-end gap-3">
              <h4 className="text-sm font-semibold">Chất lượng sản phẩm: </h4>
              <StarRatings
                rating={rating}
                starRatedColor="orange"
                starHoverColor="orange"
                changeRating={setRating}
                numberOfStars={5}
                name="user-rating"
                starDimension="20px"
                starSpacing="5px"
              />
            </div>
            <Textarea
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
              placeholder="Viết bình luận của bạn"
            />
            <div className="w-full flex justify-end">
              <Button
                onClick={handleComment}
                className="bg-blue-500 text-white! font-semibold rounded"
              >
                Gửi đánh giá
              </Button>
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm">Bạn đã đánh giá sản phẩm này</p>
        )}
      </div>
      <div className="flex-1 overflow-y-auto max-h-[300px]">
        {userRatings?.map((rating, index) => (
          <RatingComment key={index} userRating={rating} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Review);
