const express = require("express");
const { ProductModel } = require("../Models/Product.model");
const productRouter = express.Router();


//Get all product
productRouter.get("/", async (req, res) => {
  const product = await ProductModel.find();
  res.send(product);
  
});
//Get all product brand
productRouter.get("/acer", async (req, res) => {
  const product = await ProductModel.find({brand:"Acer"});
  res.send(product);
  
});
productRouter.get("/android", async (req, res) => {
  const product = await ProductModel.find({brand:"android"});
  res.send(product);
  
});
productRouter.get("/iphone", async (req, res) => {
  const product = await ProductModel.find({brand:"iphone"});
  res.send(product);
  
});
productRouter.get("/amazon", async (req, res) => {
  const product = await ProductModel.find({brand:"Amazon"});
  res.send(product);
  
});
productRouter.get("/latest", async (req, res) => {
  const product = await ProductModel.find({brand:"latest"});
  res.send(product);
  
});
productRouter.get("/marketplace", async (req, res) => {
  const product = await ProductModel.find({brand:"marketplace"});
  res.send(product);
  
});
productRouter.get("/topdeals", async (req, res) => {
  const product = await ProductModel.find({brand:"topdeals"});
  res.send(product);
  
});
productRouter.get("/sponsered", async (req, res) => {
  const product = await ProductModel.find({brand:"sponsered"});
  res.send(product);
  
});
productRouter.get("/smarthome", async (req, res) => {
  const product = await ProductModel.find({brand:"smarthome"});
  res.send(product);
  
});

//Add new product
productRouter.post("/createproduct", async (req, res) => {
  const payload = req.body;
  try {
    const new_product =ProductModel.create(payload);
   
    res.send({ msg: "Product created successfully" });
  } catch (err) {
    res.send(400).json({ msg: "Something went wrong" });
  }
});

//Update product
productRouter.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await ProductModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    );
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete product
productRouter.delete("/delete/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: productID });
    res.send({ msg: "Product deleted successfully" });
  } catch (err) {
    res.send(400).send({ msg: "Something Went Wrong" });
  }
});

module.exports = { productRouter };
