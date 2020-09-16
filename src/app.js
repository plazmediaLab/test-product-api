import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

// Routers
import ProductsRouters from './routes/products.routes';
import AuthRouters from './routes/auth.routes';

// Instancia de express
const app = express();

app.set('pkg', pkg);

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Main API route
app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
});

app.use('/api/products', ProductsRouters);
app.use('/api/auth', AuthRouters);

export default app;