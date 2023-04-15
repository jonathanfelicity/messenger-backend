import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '@interfaces/users.interface';
import { UserRole } from '@/enums/users.role.enum';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Unique(['email'])
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.Customer })
  status: UserRole;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
