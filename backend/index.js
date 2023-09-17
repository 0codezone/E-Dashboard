import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./db/config.js";
import User from "./db/User.js";
import Product from "./db/Product.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// Call connectDB to establish the database connection
connectDB();

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

// -------------------login----------------
app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
  } else {
    resp.send({ result: "No user found" });
  }
});

//--------------------------add product -------
app.post("/add-product", async (req, resp) => {
  // resp.send(req.body);
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

//-------------------Products ---------------
app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "no result found" });
  }
});
//----delete product
app.delete("/product/:id", async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  result ? resp.send(result) : resp.send({ result: "No record found" });
});

// ---- get digle product detail for updation
app.get("/product/:id", async (req, resp) => {
  const result = await Product.findOne({ _id: req.params.id });
  resp.send(result);
});

//-----------update product ----
app.put("/product/:id", async (req, resp) => {
  const result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
});

// /----serach prduct --

app.get("/search/:key", async (req, resp) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});

// app.get("/", (req, resp) => {
//   resp.send("app is working...");
// });
const PORT = 5000 || process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log("app is running on port 5000");
});
