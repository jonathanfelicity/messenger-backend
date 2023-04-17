import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@/middlewares/auth.middleware';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Get all users
    this.router.get(
      `${this.path}`,
      authMiddleware, // requires authentication
      this.usersController.getUsers, // handles the request
    );

    // Get user by ID
    this.router.get(
      `${this.path}/:id(\\d+)`,
      authMiddleware, // requires authentication
      this.usersController.getUserById, // handles the request
    );

    // Create a new user
    this.router.post(
      `${this.path}`,
      validationMiddleware(CreateUserDto, 'body'), // validates the request body
      authMiddleware, // requires authentication
      this.usersController.createUser, // handles the request
    );

    // Update user by ID
    this.router.put(
      `${this.path}/:id(\\d+)`,
      validationMiddleware(CreateUserDto, 'body', true), // validates the request body for update
      authMiddleware, // requires authentication
      this.usersController.updateUser, // handles the request
    );

    // Delete user by ID
    this.router.delete(
      `${this.path}/:id(\\d+)`,
      authMiddleware, // requires authentication
      this.usersController.deleteUser, // handles the request
    );
    // Update user role by ID
    this.router.patch(
      `${this.path}/:id(\\d+)/role`,
      authMiddleware, // requires authentication
      this.usersController.updateUserRole, // handles the request
    );
  }
}

export default UsersRoute;
