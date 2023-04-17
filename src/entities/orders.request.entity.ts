import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { OrderRequest } from '@/interfaces/orders.request.interface';
import { UserEntity } from './users.entity';
import { OrderEntity } from './orders.entity';
import { OrderRequestStatusEnum } from '@/enums/order.request.status.enum';

@Entity()
export class OrderRequestEntity extends BaseEntity implements OrderRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  riderId: number;

  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'riderId' })
  rider: UserEntity;

  @OneToOne(() => OrderEntity, order => order.orderRequest, { eager: true })
  @JoinColumn({ name: 'orderId' })
  order: OrderEntity;

  @Column({ type: 'enum', enum: OrderRequestStatusEnum, default: OrderRequestStatusEnum.Pending })
  status: OrderRequestStatusEnum;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
