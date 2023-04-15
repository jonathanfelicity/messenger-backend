import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { OrderRequest } from '@/interfaces/orders.request.interface';
import { UserEntity } from './users.entity';
import { OrderRequestEnum } from '@/enums/order.request.enum';

@Entity()
export class OrderRequestEntity extends BaseEntity implements OrderRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  riderId: number;

  @ManyToOne(() => UserEntity, user => user.id)
  rider: UserEntity;

  @Column({ type: 'enum', enum: OrderRequestEnum, default: OrderRequestEnum.Pending })
  status: OrderRequestEnum;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
