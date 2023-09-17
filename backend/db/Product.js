import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
});

const Product = mongoose.model("Product", productSchema); // Use singular form and uppercase first letter.
export default Product;
