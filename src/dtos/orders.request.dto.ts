import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderRequestDto {
  @IsNotEmpty()
  public orderId: number;

  @IsNotEmpty()
  public customerId: number;

  @IsNumber()
  public riderId?: number;
}
