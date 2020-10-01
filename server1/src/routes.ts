import express from 'express';
import ServicesController from './controllers/ServicesControllers';
import RegisterController from './controllers/RegisterControllers';

const routes = express.Router();
const servicesControllers = new ServicesController();
const registerControllers = new RegisterController();

routes.post('/service', servicesControllers.create);
routes.get('/services', servicesControllers.index);

routes.post('/register', registerControllers.create);
routes.get('/', registerControllers.index);

export default routes;