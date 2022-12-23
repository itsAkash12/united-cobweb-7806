const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
require("dotenv").config();
const { connection } = require("../config/db");
const { productRouter } = require("../Routers/Product.route");
const {userRouter}=require("../Routers/User.route")
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({
  origin:"*"
}))
app.get("/", (req, res) => {
  res.send("Welcome...");
});

app.use("/product", productRouter);
app.use("/user",userRouter)

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connect to db successfully!!");
  } catch (err) {
    console.log(err);
  }
  console.log(`Listing to port ${PORT}`);
});
