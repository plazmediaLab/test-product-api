import { Router } from 'express';
import { authJWT } from '../middlewares';

// import all controllers
import ProductController from '../controller/ProductsController';

const routes = new Router();

// Add routes
routes.get('/', ProductController.index);// -> Obtener productos
routes.post('/', [authJWT.verifyToken, authJWT.isModerator], ProductController.store);// -> Crear producto
routes.get('/:id', ProductController.show);// -> obtenrr un producto por ID
routes.put('/:id', [authJWT.verifyToken, authJWT.isAdmin],  ProductController.update);// -> Actualizar un producto
routes.delete('/:id', [authJWT.verifyToken, authJWT.isAdmin],  ProductController.destroy);// -> Eliminar un producto

module.exports = routes;