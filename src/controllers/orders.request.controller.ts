import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { HttpException } from '@exceptions/HttpException';
import { OrderRequest } from '@/interfaces/orders.request.interface';
import OrderRequestService from '@/services/orders.request.service';

class OrderRequestController {
  private orderRequestService = getCustomRepository(OrderRequestService);

  public createOrderRequest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { riderId, status, orderId } = req.body;
      const orderRequestData: OrderRequest = { riderId, status, orderId };
      const createOrderRequestData: OrderRequest = await this.orderRequestService.createOrderRequest(orderRequestData);
      res.status(201).json({ data: createOrderRequestData, message: 'Order request created' });
    } catch (error) {
      next(new HttpException(500, 'Internal server error'));
    }
  };

  public async approveOrderRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { requestId } = req.params;
      await this.orderRequestService.approveOrderRequest(Number(requestId));
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }

  public async rejectOrderRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { requestId } = req.params;
      await this.orderRequestService.rejectOrderRequest(Number(requestId));
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  }
}

export default OrderRequestController;
