import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import OrdersRoute from '@/routes/orders.route';
import OrderRequestRoute from '@/routes/orders.request.route';
import validateEnv from '@utils/validateEnv';

// Validate environment variables
validateEnv();

// Create an instance of the App class and start listening for incoming requests
const routes = [new IndexRoute(), new UsersRoute(), new AuthRoute(), new OrdersRoute(), new OrderRequestRoute()];
const app = new App(routes);
app.listen();
