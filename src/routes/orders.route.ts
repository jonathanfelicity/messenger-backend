import { Router } from 'express';
import { OrdersController } from '@controllers/orders.controller';
import { CreateOrderDto } from '@dtos/orders.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class OrdersRoute implements Routes {
  public path = '/orders';
  public router = Router();
  public ordersController = new OrdersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.ordersController.getOrders);
    this.router.get(`${this.path}/:id(\\d+)`, this.ordersController.getOrderById);
    this.router.post(`${this.path}`, validationMiddleware(CreateOrderDto, 'body'), this.ordersController.createOrder);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateOrderDto, 'body', true), this.ordersController.updateOrder);
    this.router.delete(`${this.path}/:id(\\d+)`, this.ordersController.deleteOrder);
  }
}

export default OrdersRoute;
