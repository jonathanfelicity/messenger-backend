import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { Order } from '@interfaces/orders.interface';
import { OrderEntity } from '@entities/orders.entity';
import { OrderRequestEnum } from '@/enums/order.request.enum';
import OrderRequestService from './orders.request.service';

import { isEmpty } from '@utils/util';

@EntityRepository()
class OrderService extends Repository<OrderEntity> {
  public async findOrderForLogistics(): Promise<Order[]> {
    const orders: Order[] = await OrderEntity.find({
      where: [{ status: 'created' }, { status: 'assigned' }],
    });
    return orders;
  }

  public async findPendingOrders(): Promise<Order[]> {
    const orders: Order[] = await OrderEntity.find({
      where: { status: 'created' },
    });
    return orders;
  }

  public async findAssignedOrders(): Promise<Order[]> {
    const orders: Order[] = await OrderEntity.find({
      where: { status: 'assigned' },
    });
    return orders;
  }

  public async updateOrderStatus(orderId: number, status: string): Promise<Order> {
    if (isEmpty(status)) throw new HttpException(400, 'Status is empty');

    const findOrder: Order = await OrderEntity.findOne({ where: { id: orderId } });
    if (!findOrder) throw new HttpException(409, "Order doesn't exist");

    findOrder.status = status;
    await findOrder.save();

    return findOrder;
  }

  public async findAllOrders(): Promise<Order[]> {
    const orders: Order[] = await OrderEntity.find();
    return orders;
  }

  public async findOrderById(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');

    const findOrder: Order = await OrderEntity.findOne({ where: { id: orderId } });
    if (!findOrder) throw new HttpException(409, "Order doesn't exist");

    return findOrder;
  }

  public async createOrder(orderData: Order, riderId: number): Promise<Order> {
    if (isEmpty(orderData)) throw new HttpException(400, 'orderData is empty');

    const createOrderData: Order = await OrderEntity.create(orderData).save();

    // Create OrderRequest service
    const orderRequestService = getCustomRepository(OrderRequestService);

    const orderRequestData = {
      riderId,
      status: OrderRequestEnum.Pending,
      orderId: createOrderData.id,
    };

    await orderRequestService.createOrderRequest(orderRequestData);

    return createOrderData;
  }

  public async updateOrder(orderId: number, orderData: Order): Promise<Order> {
    if (isEmpty(orderData)) throw new HttpException(400, 'orderData is empty');

    const findOrder: Order = await OrderEntity.findOne({ where: { id: orderId } });
    if (!findOrder) throw new HttpException(409, "Order doesn't exist");

    await OrderEntity.update(orderId, orderData);

    const updatedOrder: Order = await OrderEntity.findOne({ where: { id: orderId } });
    return updatedOrder;
  }

  public async deleteOrder(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');

    const findOrder: Order = await OrderEntity.findOne({ where: { id: orderId } });
    if (!findOrder) throw new HttpException(409, "Order doesn't exist");

    await OrderEntity.delete({ id: orderId });
    return findOrder;
  }
}

export default OrderService;
