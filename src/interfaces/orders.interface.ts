import { User } from './users.interface';
import { OrderStatusEnum } from '@/enums/order.status.enum';

export interface Order {
  id: number;
  ownerId: number;
  owner: User;
  pickupAddress: string;
  deliveryAddress: string;
  totalAmount: number;
  status: OrderStatusEnum;
}
