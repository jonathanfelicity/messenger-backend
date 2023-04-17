import { Router } from 'express';
import OrdersController from '@controllers/orders.controller';
import { CreateOrderDto } from '@dtos/orders.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';
// import checkUserRole from '@/middlewares/role.middleware';

class OrdersRoute implements Routes {
  public path = '/orders';
  public router = Router();
  public ordersController = new OrdersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Get all orders
    this.router.get(
      `${this.path}`,
      authMiddleware, // requires authentication
      this.ordersController.getOrders, // handles the request
    );

    // Get an order by ID
    this.router.get(
      `${this.path}/:id(\\d+)`,
      authMiddleware, // requires authentication
      this.ordersController.getOrderById, // handles the request
    );

    // Create an order
    this.router.post(
      `${this.path}`,
      authMiddleware, // requires authentication
      validationMiddleware(CreateOrderDto, 'body'), // validates the request body
      this.ordersController.createOrder, // handles the request
    );

    // Update an order by ID
    this.router.put(
      `${this.path}/:id(\\d+)`,
      authMiddleware, // requires authentication
      validationMiddleware(CreateOrderDto, 'body', true), // validates the request body
      this.ordersController.updateOrder, // handles the request
    );

    // Delete an order by ID
    this.router.delete(
      `${this.path}/:id(\\d+)`,
      authMiddleware, // requires authentication
      this.ordersController.deleteOrder, // handles the request
    );

    // Update the status of an order by ID
    this.router.put(
      `${this.path}/:id(\\d+)/status`,
      authMiddleware, // requires authentication
      // checkUserRole,
      this.ordersController.updateOrderStatus, // handles the request
    );
  }
}

export default OrdersRoute;
