const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "la ki";
var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'carrito.db');

let db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.run(`INSERT INTO carritoItem(ID, name, count, unitCost, currency, image) VALUES(?, ?, ?, ?, ?, ?)`,
[req.],
  function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});


app.use("/cart", (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers["access-token"], SECRET_KEY);
    console.log(decoded);
    next();
  } catch (err) {
    res.status(401).json({ message: "Usuario no autorizado" });
  }
});

function validarEmail(user) {
   
  var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return regex.test(user);
}


app.get('/cart', (req, res) => {
    try {
      // Leer el archivo de carrito
      const cartPath = path.join(__dirname, '../user_cart', '25801.json');
      const cartData = fs.readFileSync(cartPath, 'utf8');
      const cart = JSON.parse(cartData);
  
      // Devolver los datos del carrito como respuesta
      res.json(cart);
    } catch (error) {
      console.error('Error al leer el archivo del carrito:', error);
      res.status(500).json({ error: 'Error al obtener los datos del carrito' });
    }
  });

// Endpoint /login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (validarEmail(username) && (username.length > 5 && password.length > 5)) {
    const token = jwt.sign({ username }, SECRET_KEY);
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Usuario y/o contraseña incorrecto" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});