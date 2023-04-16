import { User } from './users.interface';

/**
 * Represents an order for delivery, containing information such as pickup and delivery addresses,
 * total amount charged, and the owner and rider associated with the order.
 *
 * @interface Order
 * @property {string} status - The status of the order (e.g. "pending", "in transit", "delivered").
 * @property {number} orderId - The unique identifier for the order.
 * @property {number} ownerId - The unique identifier for the owner who placed the order.
 * @property {User} owner - The User object representing the customer who placed the order.
 * @property {string} pickupAddress - The address where the items are to be picked up.
 * @property {string} deliveryAddress - The address where the items are to be delivered.
 * @property {number} totalAmount - The total amount charged for the order.
 * @property {Date} createdAt - The date and time when the order was created.
 * @property {Date} updatedAt - The date and time when the order was last updated.
 */
export interface Order {
  status: string;
  ownerId: number;
  owner: User;
  pickupAddress: string;
  deliveryAddress: string;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
