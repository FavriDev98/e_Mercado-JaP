const express = require('express');
const mariadb = require('mariadb');
const nodemon = require('nodemon');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/cart', (req, res) => {
    try {
      // Leer el archivo de carrito
      const cartPath = path.resolve(__dirname, 'C:/Users/Epsil/OneDrive/Escritorio/Proyecto final JaP/API/user_cart/25801.json');
      const cartData = fs.readFileSync(cartPath, 'utf8');
      const cart = JSON.parse(cartData);
  
      // Devolver los datos del carrito como respuesta
      res.json(cart);
    } catch (error) {
      console.error('Error al leer el archivo del carrito:', error);
      res.status(500).json({ error: 'Error al obtener los datos del carrito' });
    }
  });

app.get('/data2', (req, res) => {
  // Lógica para servir el segundo archivo JSON
  res.json({ data: 'contenido del archivo 2' });
});

// Endpoint /login
app.post('/login', (req, res) => {
  // Lógica para autenticar al usuario y generar el token con jsonwebtoken
  // ...

  // Enviar el token como respuesta al frontend
  res.json({ token: 'tu_token_aqui' });
});

// Middleware de autorización para /cart
const authorizeMiddleware = (req, res, next) => {
  // Lógica para verificar y validar el token
  // ...

  // Si el token es válido, permitir acceso
  // Si no es válido, enviar una respuesta de error
};

// Ruta protegida con el middleware de autorización
app.get('/cadwart', authorizeMiddleware, (req, res) => {
  // Lógica para la ruta /cart
  res.json({ message: 'Contenido del carrito' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});