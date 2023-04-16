import { NextFunction, Request, Response } from 'express';
import { Order } from '@interfaces/orders.interface';
import OrderService from '@services/orders.service';
import { CreateOrderDto } from '@/dtos/orders.dto';

class OrdersController {
  public orderService = new OrderService();

  public getOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllOrdersData: Order[] = await this.orderService.findAllOrders();

      res.status(200).json({ data: findAllOrdersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getOrderById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderId = Number(req.params.id);
      const findOneOrderData: Order = await this.orderService.findOrderById(orderId);

      res.status(200).json({ data: findOneOrderData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderData: CreateOrderDto = req.body;
      const createOrderData: Order = await this.orderService.createOrder(orderData);

      res.status(201).json({ data: createOrderData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderId = Number(req.params.id);
      const orderData: CreateOrderDto = req.body;
      const updateOrderData: Order = await this.orderService.updateOrder(orderId, orderData);

      res.status(200).json({ data: updateOrderData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderId = Number(req.params.id);
      const deleteOrderData: Order = await this.orderService.deleteOrder(orderId);

      res.status(200).json({ data: deleteOrderData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

  public updateOrderStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderId = Number(req.params.orderId);
      const { status } = req.body;
      const updateOrderData: Order = await this.orderService.updateOrderStatus(orderId, status);

      res.status(204).json({ data: updateOrderData, message: 'Order status updated' });
    } catch (error) {
      next(error);
    }
  };

  public getPendingOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findPendingOrdersData: Order[] = await this.orderService.findPendingOrders();

      res.status(200).json({ data: findPendingOrdersData, message: 'Pending orders retrieved' });
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;
