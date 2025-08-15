const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configuración de variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Endpoint inicial
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
