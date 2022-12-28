const fs = require ("node:fs");

class ProductManager {
  productos;
    constructor(path) {
      this.path = path;
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

      this.guardarEnArchivo();


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

    guardarEnArchivo(){
      try {
          fs.writeFileSync(this.path, JSON.stringify(this.productos));
      } catch (err) {
          throw new Error(err);
      }
  }

  cargarElArchivo() {
      try {
          this.productos = JSON.parse(fs.readFileSync(this.path,"utf-8"))
      } catch (err){
          throw new Error (err);
      }
  }
  }

//CREAMOS UNA INSTANCIA

const productManager = new ProductManager("./Desafio2/productos.json");

//PRODUCTOS
productManager.addProduct('Pantufla', 'Pantufl Dama Abierta', 1810, 'https://res.cloudinary.com/djjmhiwzd/image/upload/v1669244037/comprimida_VERANO_COMUNES_excqpp.png', 'D-01', 4);
productManager.addProduct('Zapatillas', 'Zapatillas de hombre', 5000, 'https://res.cloudinary.com/djjmhiwzd/image/upload/v1670891783/vecteezy_sneakers-shoes-clipart-design-illustration_9399188_732_q1sauo.png', 'Zap-4', 65);
productManager.addProduct('Remeras', 'Remera de hombre', 3200, 'https://res.cloudinary.com/djjmhiwzd/image/upload/v1670891788/vecteezy_isolated-blue-t-shirt_8847305_174_jlde7t.png', 'Rem-3', 56);

const allProducts = productManager.getProducts();
console.log(allProducts);

const productById = productManager.getProductById(2);
console.log(productById);





/*
    
//PAra actualizar calculo que se usa el método write debido a que escribe o sobre escribe
//Como dice que recibe el id y el campo, calculo que debe recibir como argumento el id y el campo productos entero.
    upDateProduct(id, productos){
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.productos));
        } catch (err) {
            throw new Error(err);
        }

    }
    
//El método para borrar es unlync, pero el profe explico como borrar un archivo entero, no se como borrar solo una parte de un archivo.
    deleteProduct(id){
        fs.unlinkSync("")
    }


}


}

*/