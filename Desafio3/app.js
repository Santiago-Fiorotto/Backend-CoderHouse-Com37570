const express = require ("express");
const ProductManager = require("../desafio2/desafio2");
const app = express();
const PORT = 8080


const productManager = new ProductManager("../desafio2/productos.json" )

app.get("/products", async (req,res) =>{
    const products = await productManager.getProducts();
    const {limit} = req.query;
    if (limit) return res.json(products.slice(0,limit));
    else return res.json(products)
});


app.get("/products/:pid",  async (req,res) =>{
    const products = await productManager.getProducts();
    const {pid} = req.params;
    const prod = products.find(prod => prod.id === pid);


    if (prod) return res.status(200).json(prod);
    else return res.status(404).json({message: "Product not found"})
});

app.listen (PORT, () => {
    console.log (`servidor en puerto ${PORT}`)
});