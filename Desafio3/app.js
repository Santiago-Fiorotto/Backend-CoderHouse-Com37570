const express = require ("express");
const {productManager} = require ("../Desafio2/desafio2");
const app = express();
const PORT = 8080

//Esto me marca la consola como que ya existe, pero si lo cambio, no me funciona tampoco
//const productManager = new ProductManager("../Desafio2/productos.json" )

app.get("/products", async (req,res) =>{
    const products = await productManager.getProducts();
    const {limit} = req.query;
    if (limit) return res.json(products.slice(0,limit));
    else return res.json(products)
});


app.get("/products/:pid",  async (req,res) =>{
    const products = await productManager.getProducts();
    const {pid} = req.params;
    const prod = products.find(prod => parseInt(prod.id) === parseInt( pid ));
    


    if (prod) return res.status(200).json(prod);
    else return res.status(404).json({message: "Product not found"})
});

app.listen (PORT, () => {
    console.log (`servidor en puerto ${PORT}`)
});