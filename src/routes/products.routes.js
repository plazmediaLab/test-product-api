import { Router } from 'express';

// import all controllers
import ProductController from '../controller/ProductsController';

const routes = new Router();

// Add routes
routes.get('/', ProductController.index);// -> Obtener productos
routes.post('/', ProductController.store);// -> Crear producto
routes.get('/:id', ProductController.show);// -> obtenrr un producto por ID
routes.put('/:id', ProductController.update);// -> Actualizar un producto
routes.delete('/:id', ProductController.destroy);// -> Eliminar un producto

module.exports = routes;