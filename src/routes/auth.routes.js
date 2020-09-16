import { Router } from 'express';

// import all controllers
import AuthController from '../controller/AuthController';

const routes = new Router();

// Add routes
routes.post('/signup', AuthController.signUp);// -> Crear usuario
routes.post('/signin', AuthController.signIn);// -> Crear producto

module.exports = routes;