import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne } from 'typeorm';
import { Order } from '@interfaces/orders.interface';
import { UserEntity } from './users.entity';
import { OrderStatusEnum } from '@/enums/order.status.enum';
import { OrderRequestEntity } from './orders.request.entity';

@Entity()
export class OrderEntity extends BaseEntity implements Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @ManyToOne(() => UserEntity, user => user.id)
  owner: UserEntity;

  @Column()
  pickupAddress: string;

  @Column()
  deliveryAddress: string;

  @Column()
  totalAmount: number;

  @OneToOne(() => OrderRequestEntity, orderRequest => orderRequest.order)
  orderRequest: OrderRequestEntity[];

  @Column({ type: 'enum', enum: OrderStatusEnum, default: OrderStatusEnum.Pending })
  status: OrderStatusEnum;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
