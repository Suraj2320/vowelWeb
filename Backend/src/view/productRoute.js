const express=require("express")
const app=express.Router()
const {postProduct, deleteProduct, patchProduct, getProduct,getSingleProduct} = require("../controller/productController")

app.post("/post",postProduct)
app.delete("/:id",deleteProduct)
app.patch("/:id",patchProduct)
app.get("/get",getProduct)
app.get("/:id",getSingleProduct)


module.exports =app


