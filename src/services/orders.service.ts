import { EntityRepository, Repository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { Order } from '@interfaces/orders.interface';
import { OrderEntity } from '@entities/orders.entity';
import { isEmpty } from '@utils/util';

@EntityRepository()
class OrderService extends Repository<OrderEntity> {
  // Find methods
  public async findOrderForLogistics(): Promise<Order[]> {
    return await OrderEntity.find({
      where: [{ status: 'created' }, { status: 'assigned' }],
    });
  }

  public async findPendingOrders(): Promise<Order[]> {
    return await OrderEntity.find({
      where: { status: 'pending' },
    });
  }

  public async findAssignedOrders(): Promise<Order[]> {
    return await OrderEntity.find({
      where: { status: 'assigned' },
    });
  }

  public async findAllOrders(): Promise<Order[]> {
    return await OrderEntity.find();
  }

  public async findOrderById(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');

    const findOrder: Order = await OrderEntity.findOne({ where: { id: orderId } });
    if (!findOrder) throw new HttpException(409, "Order doesn't exist");

    return findOrder;
  }

  public async createOrder(orderData: Order): Promise<Order> {
    if (isEmpty(orderData)) {
      throw new HttpException(400, 'orderData is empty');
    }

    const order = await OrderEntity.create(orderData).save();

    return order;
  }
  public async updateOrderStatus(orderId: number, status: string): Promise<Order> {
    if (isEmpty(status)) throw new HttpException(400, 'Status is empty');

    const findOrder: Order = await this.findOrderById(orderId);

    findOrder.status = status;
    await findOrder.save();

    return findOrder;
  }

  // update method
  public async updateOrder(orderId: number, orderData: Order): Promise<Order> {
    if (isEmpty(orderData)) throw new HttpException(400, 'orderData is empty');

    const findOrder: Order = await this.findOrderById(orderId);

    await OrderEntity.update(orderId, orderData);

    const updatedOrder: Order = await OrderEntity.findOne({ where: { id: orderId } });
    return updatedOrder;
  }

  // Delete method
  public async deleteOrder(orderId: number): Promise<Order> {
    if (isEmpty(orderId)) throw new HttpException(400, 'OrderId is empty');

    const findOrder: Order = await this.findOrderById(orderId);

    await OrderEntity.delete({ id: orderId });
    return findOrder;
  }
}

export default OrderService;
