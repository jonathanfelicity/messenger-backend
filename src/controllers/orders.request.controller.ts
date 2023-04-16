import { NextFunction, Request, Response } from 'express';
import { OrderRequest } from '@/interfaces/orders.request.interface';
import OrderRequestService from '@/services/orders.request.service';
import { CreateOrderRequestDto } from '@/dtos/orders.request.dto';

class OrderRequestController {
  public orderRequestService = new OrderRequestService();

  public createOrderRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderRequestData: CreateOrderRequestDto = req.body;
      const createOrderRequestData: OrderRequest = await this.orderRequestService.createOrderRequest(orderRequestData);

      res.status(201).json({ data: createOrderRequestData, message: 'Order request created' });
    } catch (error) {
      next(error);
    }
  };

  public rejectOrderRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderRequestId = Number(req.params.id);
      const rejectOrderRequestData: OrderRequest = await this.orderRequestService.rejectOrderRequest(orderRequestId);

      res.status(200).json({ data: rejectOrderRequestData, message: 'Order request rejected' });
    } catch (error) {
      next(error);
    }
  };

  public approveOrderRequest = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orderRequestId = Number(req.params.id);
      const approveOrderRequestData: OrderRequest = await this.orderRequestService.acceptOrderRequest(orderRequestId);

      res.status(200).json({ data: approveOrderRequestData, message: 'Order request approved' });
    } catch (error) {
      next(error);
    }
  };
}

export default OrderRequestController;
