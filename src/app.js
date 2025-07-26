import express from 'express';


const productsRouter = require("./routers/products.router.js")
const cartRouter = require("./routers/carts.router.js")

const app = express();

const PORT = 8080;

app.use(express.json())

app.use('/api/products',productsRouter);
app.use('/api/carts', cartRouter)

app.listen(PORT =>{
    console.log(`servidor en el puerto ${8080}`)
})