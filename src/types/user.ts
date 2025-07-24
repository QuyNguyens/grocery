import { DeliveryAddress } from './deliveryAddress';

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  address?: DeliveryAddress[];
}
