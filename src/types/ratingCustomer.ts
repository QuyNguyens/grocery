export interface RatingCustomerType {
  rating: number;
  comment: string;
  avatar: string;
  name: string;
}

export interface UserRating {
  rating: number;
  comment: string;
  createdAt?: Date;
  name: string;
  avatar: string;
}
