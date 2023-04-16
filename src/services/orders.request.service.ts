import { EntityRepository, Repository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { OrderRequest } from '@interfaces/orders.request.interface';
import { OrderRequestEntity } from '@entities/orders.request.entity';
import { OrderRequestEnum } from '@/enums/order.request.enum';
import { isEmpty } from '@utils/util';

@EntityRepository()
class OrderRequestService extends Repository<OrderRequestEntity> {
  // Find methods
  public async findOrderRequestsByRiderId(riderId: number): Promise<OrderRequest[]> {
    if (isEmpty(riderId)) throw new HttpException(400, 'RiderId is empty');

    const findOrderRequests: OrderRequest[] = await OrderRequestEntity.find({
      where: { riderId },
      relations: ['order'],
    });
    if (!findOrderRequests) throw new HttpException(409, "Order request doesn't exist");

    return findOrderRequests;
  }

  // Create method
  public async createOrderRequest(orderRequestData: OrderRequest): Promise<OrderRequest> {
    if (isEmpty(orderRequestData)) throw new HttpException(400, 'Order request data is empty');

    const createOrderRequestData: OrderRequest = await OrderRequestEntity.create(orderRequestData).save();

    return createOrderRequestData;
  }

  // Update methods
  public async acceptOrderRequest(orderRequestId: number): Promise<void> {
    if (isEmpty(orderRequestId)) throw new HttpException(400, 'OrderRequestId is empty');

    const findOrderRequest: OrderRequest = await this.findOrderRequestById(orderRequestId);

    findOrderRequest.status = OrderRequestEnum.Accepted;
    await findOrderRequest.save();
  }

  public async rejectOrderRequest(orderRequestId: number): Promise<void> {
    if (isEmpty(orderRequestId)) throw new HttpException(400, 'OrderRequestId is empty');

    const findOrderRequest: OrderRequest = await this.findOrderRequestById(orderRequestId);

    findOrderRequest.status = OrderRequestEnum.Declined;
    await findOrderRequest.save();
  }

  // Delete method
  public async deleteOrderRequest(orderRequestId: number): Promise<OrderRequest> {
    if (isEmpty(orderRequestId)) throw new HttpException(400, 'OrderRequestId is empty');

    const findOrderRequest: OrderRequest = await this.findOrderRequestById(orderRequestId);

    await OrderRequestEntity.delete({ id: orderRequestId });
    return findOrderRequest;
  }

  // Private methods
  private async findOrderRequestById(orderRequestId: number): Promise<OrderRequest> {
    if (isEmpty(orderRequestId)) throw new HttpException(400, 'OrderRequestId is empty');

    const findOrderRequest: OrderRequest = await OrderRequestEntity.findOne({ where: { id: orderRequestId } });
    if (!findOrderRequest) throw new HttpException(409, "Order request doesn't exist");

    return findOrderRequest;
  }
}

export default OrderRequestService;
