import { NextFunction, Request, Response } from 'express';
import { Order } from '@interfaces/orders.interface';
import { OrderService } from '@services/orders.service';

class OrdersController {
  public orderService = new OrderService();

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

  public getAssignedOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const riderId = Number(req.query.riderId);
      const findAssignedOrdersData: Order[] = await this.orderService.findAssignedOrders(riderId);

      res.status(200).json({ data: findAssignedOrdersData, message: 'Assigned orders retrieved' });
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

  public getOrderForLogistics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderId = Number(req.params.orderId);
      const findOrderForLogisticsData: Order = await this.orderService.findOrderForLogistics(orderId);

      res.status(200).json({ data: findOrderForLogisticsData, message: 'Order information retrieved for logistics' });
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;
