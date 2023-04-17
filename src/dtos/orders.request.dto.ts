import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderRequestDto {
  @IsNotEmpty()
  public orderId: number;

  @IsNumber()
  public riderId: number;

  @IsNumber()
  @IsOptional()
  public status: number;
}
