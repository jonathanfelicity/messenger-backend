import { EntityRepository, Repository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { OrderRequest } from '@interfaces/orders.request.interface';
import { OrderRequestEntity } from '@entities/orders.request.entity';
import { OrderRequestStatusEnum } from '@/enums/order.request.status.enum';
import { isEmpty } from '@utils/util';

@EntityRepository(OrderRequestEntity)
class OrderRequestService extends Repository<OrderRequestEntity> {
  // Find methods
  public async findOrderRequestsByRiderId(riderId: number): Promise<OrderRequest[]> {
    if (isEmpty(riderId)) {
      throw new HttpException(400, 'RiderId is empty');
    }

    const findOrderRequests: OrderRequest[] = await this.createQueryBuilder('order_request')
      .leftJoinAndSelect('order_request.order', 'order')
      .where('order_request.riderId = :riderId', { riderId })
      .getMany();

    if (isEmpty(findOrderRequests)) {
      throw new HttpException(409, "Order requests don't exist for this rider");
    }

    return findOrderRequests;
  }

  // Create method
  public async createOrderRequest(orderRequestData: OrderRequest): Promise<OrderRequest> {
    if (isEmpty(orderRequestData)) {
      throw new HttpException(400, 'Order request data is empty');
    }

    const orderRequest: OrderRequestEntity = this.create(orderRequestData);
    const savedOrderRequest: OrderRequest = await this.save(orderRequest);

    return savedOrderRequest;
  }

  // Update methods
  public async acceptOrderRequest(orderRequestId: number): Promise<void> {
    if (isEmpty(orderRequestId)) {
      throw new HttpException(400, 'OrderRequestId is empty');
    }

    const orderRequest: OrderRequestEntity = await this.getOrderRequestById(orderRequestId);
    orderRequest.status = OrderRequestStatusEnum.Accepted;
    await this.save(orderRequest);
  }

  public async rejectOrderRequest(orderRequestId: number): Promise<void> {
    if (isEmpty(orderRequestId)) {
      throw new HttpException(400, 'OrderRequestId is empty');
    }

    const orderRequest: OrderRequestEntity = await this.getOrderRequestById(orderRequestId);
    orderRequest.status = OrderRequestStatusEnum.Declined;
    await this.save(orderRequest);
  }

  // Delete method
  public async deleteOrderRequest(orderRequestId: number): Promise<OrderRequest> {
    if (isEmpty(orderRequestId)) {
      throw new HttpException(400, 'OrderRequestId is empty');
    }

    const orderRequest: OrderRequestEntity = await this.getOrderRequestById(orderRequestId);
    await this.delete(orderRequestId);

    return orderRequest;
  }

  // Private methods
  private async getOrderRequestById(orderRequestId: number): Promise<OrderRequestEntity> {
    if (isEmpty(orderRequestId)) {
      throw new HttpException(400, 'OrderRequestId is empty');
    }

    const orderRequest: OrderRequestEntity = await this.findOne(orderRequestId);

    if (!orderRequest) {
      throw new HttpException(409, "Order request doesn't exist");
    }

    return orderRequest;
  }
}

export default OrderRequestService;
