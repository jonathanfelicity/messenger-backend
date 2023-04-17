import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { OrderRequest } from '@/interfaces/orders.request.interface';
import { UserEntity } from './users.entity';
import { OrderEntity } from './orders.entity';
import { OrderRequestEnum } from '@/enums/order.request.enum';

@Entity()
export class OrderRequestEntity extends BaseEntity implements OrderRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  riderId: number;

  @ManyToOne(() => UserEntity, user => user.id)
  rider: UserEntity;

  @Column()
  orderId: number;

  @OneToOne(() => OrderEntity, order => order.orderRequest)
  @JoinColumn({ name: 'orderId' })
  order: OrderEntity;

  @Column({ type: 'enum', enum: OrderRequestEnum, default: OrderRequestEnum.Pending })
  status: OrderRequestEnum;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
