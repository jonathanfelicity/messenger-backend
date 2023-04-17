import { User } from './users.interface';
import { Order } from './orders.interface';
import { OrderStatusEnum } from '@/enums/order.status.enum';

export interface OrderRequest {
  id: number;
  riderId: number;
  rider: User;
  orderId: number;
  order: Order;
  status: OrderStatusEnum;
}
