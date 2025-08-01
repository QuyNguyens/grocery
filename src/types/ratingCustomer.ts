export interface RatingCustomerType {
  rating: number;
  comment: string;
  avatar: string;
  name: string;
}

export interface UserRating {
  userId: string;
  rating: number;
  comment: string;
  createdAt?: Date;
  name: string;
  avatar: string;
}
