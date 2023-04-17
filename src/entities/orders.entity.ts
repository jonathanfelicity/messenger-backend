import { Entity, Column, ManyToOne } from 'typeorm';
import { Order } from '@interfaces/orders.interface';
import { BaseEntityWithTimestamps } from './bewt.entity';
import { UserEntity } from './users.entity';
import { OrderStatusEnum } from '@/enums/order.status.enum';

@Entity()
export class OrderEntity extends BaseEntityWithTimestamps implements Order {
  @Column()
  ownerId: number;

  @ManyToOne(() => UserEntity, user => user.id)
  owner: UserEntity;

  @Column()
  pickupAddress: string;

  @Column()
  deliveryAddress: string;

  @Column()
  totalAmount: number;

  @Column({ type: 'enum', enum: OrderStatusEnum, default: OrderStatusEnum.Pending })
  status: OrderStatusEnum;
}
