const {pantuflas , zapatillas, remeras} = require("./mock");

class ProductManager {
    constructor () {
        this.products = [];
        this.product = Product; 
    }

    getProducts() {
        return this.products;
    }
    addProduct(product){
        if (this.getProducts().find((p) => p.code == product.code) || product.title.length === 0 || product.description.length === 0 || product.price.length === 0 || product.thumbnail.length === 0 || product.stock.length === 0) return console.log ("ESTE PRODUCTO YA EXISTE  EN SU CARRITO O LE FALTA ALGUNA PROPIEDAD")
        else product.id = this.getProducts().length + 1; this.products.push(product)
    }

    getProductById(product){
        if (this.getProducts().find((i) => i.id == product.id)) {
            return console.log("Este ID existe")
        }
        else console.log("NOT FOUND")

    }


}

class Product extends ProductManager {
    constructor (title,description,price,thumbnail,code,stock) {
        super();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;

    }
}
const prod = new ProductManager();


prod.addProduct(pantuflas);
prod.addProduct(remeras);
prod.addProduct(zapatillas)
console.log(prod.getProducts())
console.log (prod.getProductById(1))



