import { Router } from 'express';
import { authJWT } from '../middlewares';

// import all controllers
import ProductController from '../controller/ProductsController';

const routes = new Router();

/*
*   Index 
*   // -> Obtener productos
*/
routes.get('/', ProductController.index);
/*
*   Store 
*   // -> Crear producto
*/
routes.post('/', [authJWT.verifyToken, authJWT.isModerator], ProductController.store); 
/*
*  Show 
*   // -> obtenrr un producto por ID
*/
routes.get('/:id', ProductController.show);
/*
*  Update
*   // -> Actualizar un producto
*/
routes.put('/:id', [authJWT.verifyToken, authJWT.isAdmin],  ProductController.update);
/*
*  Destroy 
*   // -> Eliminar un producto
*/
routes.delete('/:id', [authJWT.verifyToken, authJWT.isAdmin],  ProductController.destroy);

module.exports = routes;