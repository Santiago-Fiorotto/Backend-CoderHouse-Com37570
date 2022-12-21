const {pantuflas , zapatillas, remeras} = require("./mock");
const fs = require ("node:fs");

class ProductManager {
    productos;
    constructor () {
        this.product = Product; 
    }

    getProducts() {
        return this.cargarElArchivo();
    }
    addProduct(product){
        if (this.getProducts().find((p) => p.code == product.code) || product.title.length === 0 || product.description.length === 0 || product.price.length === 0 || product.thumbnail.length === 0 || product.stock.length === 0) return console.log ("ESTE PRODUCTO YA EXISTE  EN SU CARRITO O LE FALTA ALGUNA PROPIEDAD")
        else product.id = this.getProducts().length + 1; this.cargarElArchivo();
        this.guardarEnArchivo();
    }

    getProductById(id){
        if (this.cargarElArchivo().find((i) => i.id == id)) {
            return console.log("Este ID existe")
        }
        else console.log("NOT FOUND")

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

class Product extends ProductManager {
    constructor (path, title,description,price,thumbnail,code,stock) {
        super();
        this.path = path;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.cargarElArchivo();

    }
}
const prod = new ProductManager("./desafio2/productos.json");


prod.addProduct(pantuflas);
prod.addProduct(remeras);
prod.addProduct(zapatillas)
console.log(prod.getProducts())
console.log (prod.getProductById(1))

