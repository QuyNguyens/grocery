declare module 'react-star-ratings' {
  import * as React from 'react';

  export interface StarRatingsProps {
    rating: number;
    numberOfStars?: number;
    changeRating?: (newRating: number) => void;
    starRatedColor?: string;
    starEmptyColor?: string;
    starHoverColor?: string;
    starDimension?: string;
    starSpacing?: string;
    name?: string;
  }

  const StarRatings: React.FC<StarRatingsProps>;
  export default StarRatings;
}
