import app from './app';
import './database';

const PORT = 1922;

// Iniciar el servidor
app.listen(PORT)

console.log('Serve listen on port', PORT);