//const {pantuflas , zapatillas, remeras} = require("mock.js");

class ProductManager {
    constructor() {
      this.products = [];
      this.idCounter = 0;
    }
  //Validar que todos los campos sean obligatorios
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('Todos los campos son obligatorios');
        return;
      }
  //Validar que no se repita el campo CODE
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        console.error('Ya existe un producto con ese código');
        return;
      }
  //agregar un producto al arreglo de productos inicial con el ID autoincrementable
      this.products.push({
        id: ++this.idCounter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  //Devolver el arreglo con todos los productos creados hasta el momento
    getProducts() {
      return this.products;
    }
  //Buscar en el array si coincide con algún ID
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      //Si no coincide con ninguno devolver Not Found !
      if (!product) {
        console.error('Not found');
        return;
      }
  //Si no devolver el producto que coincida con el ID
      return product;
    }
  }

//CREAMOS UNA INSTANCIA

const productManager = new ProductManager();

productManager.addProduct('Pantufla', 'Pantufl Dama Abierta', 1810, 'https://res.cloudinary.com/djjmhiwzd/image/upload/v1669244037/comprimida_VERANO_COMUNES_excqpp.png', 'D-01', 4);

productManager.addProduct('Zapatillas', 'Zapatillas de hombre', 5000, 'https://res.cloudinary.com/djjmhiwzd/image/upload/v1670891783/vecteezy_sneakers-shoes-clipart-design-illustration_9399188_732_q1sauo.png', 'Zap-4', 65);


productManager.addProduct('Remeras', 'Remera de hombre', 3200, 'https://res.cloudinary.com/djjmhiwzd/image/upload/v1670891788/vecteezy_isolated-blue-t-shirt_8847305_174_jlde7t.png', 'Rem-3', 56);

const allProducts = productManager.getProducts();
console.log(allProducts);

const productById = productManager.getProductById(1);
console.log(productById);
