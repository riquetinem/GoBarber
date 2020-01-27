import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/AuthMiddleware';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// só se aplica as rotas que estão de baixo do middleware
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
