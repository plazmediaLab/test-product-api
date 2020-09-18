import { Router } from 'express';

// import all controllers
import AuthController from '../controller/AuthController';

const routes = new Router();

/*
*   Sign Up 
*   // -> Crear usuario
*/
routes.post('/signup', AuthController.signUp);
/*
*   Sign In 
*   // -> Login a un usuario
*/
routes.post('/signin', AuthController.signIn);

module.exports = routes;