import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderRequestDto {
  @IsNotEmpty()
  public orderId: number;

  @IsNotEmpty()
  public customerId: number;

  @IsOptional()
  @IsNumber()
  public riderId?: number;

  @IsNotEmpty()
  public pickupAddress: string;

  @IsOptional()
  @IsString()
  public deliveryAddress: string;
}
