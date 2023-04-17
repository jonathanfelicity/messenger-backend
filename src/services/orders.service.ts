import { EntityRepository, Repository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { Order } from '@interfaces/orders.interface';
import { OrderEntity } from '@entities/orders.entity';
import { isEmpty } from '@utils/util';
import { OrderStatusEnum } from '@/enums/order.status.enum';

@EntityRepository()
export class OrderService extends Repository<OrderEntity> {
  public async findPendingOrders(): Promise<Order[]> {
    const pendingOrders: Order[] = await OrderEntity.find({ where: { status: OrderStatusEnum.Pending } });
    return pendingOrders;
  }

  public async findAllOrders(): Promise<Order[]> {
    const orders: Order[] = await OrderEntity.find();
    return orders;
  }

  public async findOrderById(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');

    const order: Order = await OrderEntity.findOne(orderId);
    if (!order) throw new HttpException(404, "Order doesn't exist");

    return order;
  }

  public async createOrder(orderData: Order): Promise<Order> {
    if (isEmpty(orderData)) throw new HttpException(400, 'orderData is empty');

    const createOrderData: Order = await OrderEntity.create(orderData).save();
    return createOrderData;
  }

  async updateOrderStatus(orderId: number, status: string): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');
    if (isEmpty(status)) throw new HttpException(400, 'Status is empty');
    const order: Order = await this.findOrderById(orderId);
    order.status = status;

    const updateOrderData: Order = await OrderEntity.save(order);
    return updateOrderData;
  }

  public async updateOrder(orderId: number, orderData: Order): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');
    if (isEmpty(orderData)) throw new HttpException(400, 'orderData is empty');

    const order: Order = await this.findOrderById(orderId);
    Object.assign(order, orderData);

    const updateOrderData: Order = await OrderEntity.save(order);
    return updateOrderData;
  }

  public async deleteOrder(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');

    const order: Order = await this.findOrderById(orderId);
    const deletedOrder: Order = await OrderEntity.remove(order);

    return deletedOrder;
  }
}
