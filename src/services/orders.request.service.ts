import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import { OrderRequest } from '@/interfaces/orders.request.interface';
import { OrderRequestEntity } from '@/entities/order.request';

@EntityRepository(OrderRequestEntity)
class OrderRequestService extends Repository<OrderRequestEntity> {
  private orderRequestRepository = getCustomRepository(OrderRequestEntity);

  public async approveOrderRequest(requestId: number): Promise<void> {
    const orderRequest = await this.orderRequestRepository.findOne(requestId);
    orderRequest.status = 'approved';
    await this.orderRequestRepository.save(orderRequest);
  }

  public async rejectOrderRequest(requestId: number): Promise<void> {
    const orderRequest = await this.orderRequestRepository.findOne(requestId);
    orderRequest.status = 'rejected';
    await this.orderRequestRepository.save(orderRequest);
  }

  public async createOrderRequest(orderRequestData: OrderRequest): Promise<OrderRequest> {
    const createOrderRequestData: OrderRequest = await OrderRequestEntity.create(orderRequestData).save();
    return createOrderRequestData;
  }

  public async findOrderRequestsByOrderId(orderId: number): Promise<OrderRequest[]> {
    const orderRequests: OrderRequest[] = await OrderRequestEntity.find({ where: { orderId } });
    return orderRequests;
  }

  public async findOrderRequestById(orderRequestId: number): Promise<OrderRequest> {
    const findOrderRequest: OrderRequest = await OrderRequestEntity.findOne({ where: { id: orderRequestId } });
    return findOrderRequest;
  }

  public async updateOrderRequest(orderRequestId: number, orderRequestData: OrderRequest): Promise<OrderRequest> {
    await OrderRequestEntity.update(orderRequestId, orderRequestData);
    const updatedOrderRequest: OrderRequest = await OrderRequestEntity.findOne({ where: { id: orderRequestId } });
    return updatedOrderRequest;
  }

  public async deleteOrderRequest(orderRequestId: number): Promise<OrderRequest> {
    const findOrderRequest: OrderRequest = await OrderRequestEntity.findOne({ where: { id: orderRequestId } });
    await OrderRequestEntity.delete({ id: orderRequestId });
    return findOrderRequest;
  }
}

export default OrderRequestService;
