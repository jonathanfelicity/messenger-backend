import { Router } from 'express';

/**
 * Represents a set of routes that can be attached to an Express application, containing a path and a router.
 *
 * @interface Routes
 * @property {string} [path] - The path to attach the router to (e.g. "/users").
 * @property {Router} router - The router containing the routes to attach.
 */
export interface Routes {
  path?: string;
  router: Router;
}
