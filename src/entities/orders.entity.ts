import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Order } from '@interfaces/orders.interface';
import { UserEntity } from './users.entity';
import { OrderStatus } from '@/enums/orders.status.enum';

@Entity()
export class OrderEntity extends BaseEntity implements Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @ManyToOne(() => UserEntity, user => user.id)
  customer: UserEntity;

  @Column()
  riderId: number;

  @ManyToOne(() => UserEntity, user => user.id)
  rider: UserEntity;

  @Column()
  pickupAddress: string;

  @Column()
  deliveryAddress: string;

  @Column()
  totalAmount: number;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.Created })
  status: OrderStatus;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
