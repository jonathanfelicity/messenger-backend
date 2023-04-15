import { Router } from 'express';
import OrderRequestController from '@/controllers/orders.request.controller';
import { Routes } from '@interfaces/routes.interface';
import { CreateOrderRequestDto } from '@/dtos/orders.request.dto';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';

class OrderRequestRoute implements Routes {
  public path = '/order-requests';
  public router = Router();
  public orderRequestController = new OrderRequestController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      authMiddleware,
      validationMiddleware(CreateOrderRequestDto, 'body'),
      this.orderRequestController.createOrderRequest,
    );
    this.router.put(`${this.path}/:id(\\d+)/approve`, authMiddleware, this.orderRequestController.approveOrderRequest);
    this.router.put(`${this.path}/:id(\\d+)/reject`, authMiddleware, this.orderRequestController.rejectOrderRequest);
  }
}

export default OrderRequestRoute;
