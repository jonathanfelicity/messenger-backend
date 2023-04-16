/**
 * Represents a user of the application, containing information such as email and password.
 *
 * @interface User
 * @property {number} id - The unique identifier for the user.
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password (stored securely using hashing and salting).
 */
export interface User {
  id: number;
  email: string;
  role: string;
  password: string;
}
