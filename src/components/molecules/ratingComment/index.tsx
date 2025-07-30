import React, { useEffect, useState } from 'react';
import { UserRating } from 'types/ratingCustomer';
import ClientStarRatings from '../clientStarRating';
import { Avatar, AvatarIcon } from '@heroui/react';
import { DateTimeFormat } from 'utils/datetimeFormat';
import { checkImageExists } from 'utils/checkImageExists';

type RatingCommentProps = {
  userRating: UserRating;
};

const RatingComment = ({ userRating }: RatingCommentProps) => {
  const [avatarUrlExists, setAvatarUrlExists] = useState<boolean>(false);

  useEffect(() => {
    checkImageExists(userRating.avatar).then(setAvatarUrlExists);
  }, [userRating.avatar]);

  return (
    <div className="w-full flex flex-col gap-3 mb-4 p-4 rounded-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <ClientStarRatings
          rating={userRating.rating}
          starRatedColor="#fabf46"
          starEmptyColor="#d1d5db"
          numberOfStars={5}
          starDimension="16px"
          starSpacing="2px"
        />
        <p>{DateTimeFormat(userRating.createdAt?.toString() || '')}</p>
      </div>
      <div className="flex items-center gap-2">
        {avatarUrlExists ? (
          <Avatar src={userRating.avatar} />
        ) : (
          <Avatar
            classNames={{
              base: 'bg-linear-to-br from-[#FFB457] to-[#FF705B]',
              icon: 'text-black/80',
            }}
            icon={<AvatarIcon />}
          />
        )}
        <p className="font-semibold">{userRating.name}</p>
      </div>
      <p>{userRating.comment}</p>
    </div>
  );
};

export default RatingComment;
