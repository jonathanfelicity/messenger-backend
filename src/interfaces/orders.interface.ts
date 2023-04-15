import { User } from './users.interface';

export interface Order {
  status: string;
  id: number;
  customerId: number;
  customer: User;
  riderId: number;
  rider: User;
  pickupAddress: string;
  deliveryAddress: string;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
