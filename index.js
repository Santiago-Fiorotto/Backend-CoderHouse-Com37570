//Desafío entregable N° 1

class ProductManager {
    products;
    constructor (title,description,price,thumbnail,code,stock){
        this.products = []
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    addProduct(producto) {
       return this.products.push(producto)
    }
    getProducts() {
        //retornar todos los productos
    }
    getProductsById() {
        //retornar el producto que cuente con este ID
        //USAR EL FIND()
    }

};

let producto = new ProductManager("pantufla", "PAntuffla dama abierta", 50, "https://res.cloudinary.com/djjmhiwzd/image/upload/v1669244037/comprimida_VERANO_COMUNES_excqpp.png", 1, 4);




// validacion del if !this.code && this.products && this.title && this.description && this.price && this.thumbnail && this.stock