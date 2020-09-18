import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import bodyParser from 'body-parser';
import { RoleSeeder, CategorySeeder } from './libs/inicialSetup';

// Routers
import ProductsRouters from './routes/products.routes';
import AuthRouters from './routes/auth.routes';

// Instancia de express
const app = express();

// Create roles
RoleSeeder();
CategorySeeder();

app.set('pkg', pkg);

// Middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
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