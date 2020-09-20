import app from './app';
import './database';
require('dotenv').config()

const PORT = process.env.PORT || 1922;

// Iniciar el servidor
app.listen(PORT)

console.log('Serve listen on port', PORT);