import { NextFunction, Request, Response } from 'express';

// Define a middleware function that checks the user's role
const checkUserRole = (req: Request, res: Response, next: NextFunction) => {
  const userRole = req.user.role; // Assuming the user's role is stored in the 'role' property of the 'user' object
  console.log(userRole);
  if (userRole === 'riders' || userRole === 'third party') {
    next(); // User has the required role, so continue to the next middleware or the route handler
  } else {
    res.status(403).json({ message: 'Forbidden' }); // User does not have the required role, so send a 403 Forbidden response
  }
};

export default checkUserRole;
