import { User } from './users.interface';

/**
 * Represents an order for delivery, containing information such as pickup and delivery addresses,
 * total amount charged, and the customer and rider associated with the order.
 *
 * @interface Order
 * @property {string} status - The status of the order (e.g. "pending", "in transit", "delivered").
 * @property {number} orderId - The unique identifier for the order.
 * @property {number} customerId - The unique identifier for the customer who placed the order.
 * @property {User} customer - The User object representing the customer who placed the order.
 * @property {number} riderId - The unique identifier for the rider assigned to the order.
 * @property {User} rider - The User object representing the rider assigned to the order.
 * @property {string} pickupAddress - The address where the items are to be picked up.
 * @property {string} deliveryAddress - The address where the items are to be delivered.
 * @property {number} totalAmount - The total amount charged for the order.
 * @property {Date} createdAt - The date and time when the order was created.
 * @property {Date} updatedAt - The date and time when the order was last updated.
 */
export interface Order {
  status: string;
  orderId: number;
  customerId: number;
  customer: User;
  riderId: number;
  rider: User;
  pickupAddress: string;
  deliveryAddress: string;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
