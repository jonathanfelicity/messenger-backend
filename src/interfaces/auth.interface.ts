import { Request } from 'express';
import { User } from '@interfaces/users.interface';

/**
 * Represents the data stored in an authentication token.
 *
 * @interface DataStoredInToken
 * @property {number} id - The ID of the user associated with the token.
 */
export interface DataStoredInToken {
  id: number;
}

/**
 * Represents an authentication token and its expiration time.
 *
 * @interface TokenData
 * @property {string} token - The token string itself.
 * @property {number} expiresIn - The time, in seconds, until the token expires.
 */
export interface TokenData {
  token: string;
  expiresIn: number;
}

/**
 * Extends the standard Express request object to include a `user` property representing
 * the authenticated user associated with the request.
 *
 * @interface RequestWithUser
 * @extends {Request}
 * @property {User} user - The authenticated user associated with the request.
 */
export interface RequestWithUser extends Request {
  user: User;
}
