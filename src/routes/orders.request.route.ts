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
    // Create an order request
    this.router.post(
      `${this.path}`,
      authMiddleware, // requires authentication
      validationMiddleware(CreateOrderRequestDto, 'body'), // validates the request body
      this.orderRequestController.createOrderRequest, // handles the request
    );

    // Approve an order request
    this.router.put(
      `${this.path}/:id(\\d+)/approve`,
      authMiddleware, // requires authentication
      this.orderRequestController.approveOrderRequest, // handles the request
    );

    // Reject an order request
    this.router.put(
      `${this.path}/:id(\\d+)/reject`,
      authMiddleware, // requires authentication
      this.orderRequestController.rejectOrderRequest, // handles the request
    );
  }
}

export default OrderRequestRoute;
