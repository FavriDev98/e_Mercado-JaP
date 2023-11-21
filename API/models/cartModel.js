function getCarrito() {
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
  }


  module.exports = {
    getCarrito,
  };