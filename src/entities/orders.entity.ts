import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Order } from '@interfaces/orders.interface';
import { UserEntity } from './users.entity';
import { OrderStatusEnum } from '@/enums/order.status.enum';

@Entity()
export class OrderEntity extends BaseEntity implements Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @ManyToOne(() => UserEntity, user => user.id)
  customer: UserEntity;

  @Column()
  pickupAddress: string;

  @Column()
  deliveryAddress: string;

  @Column()
  totalAmount: number;

  @Column({ type: 'enum', enum: OrderStatusEnum, default: OrderStatusEnum.Pending })
  status: OrderStatusEnum;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
