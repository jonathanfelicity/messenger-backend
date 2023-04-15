import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  public customerId: number;

  @IsNumber()
  public riderId: number;

  @IsString()
  public pickupAddress: string;

  @IsString()
  public deliveryAddress: string;

  @IsNumber()
  public totalAmount: number;

  @IsString()
  public status?: string;
}
