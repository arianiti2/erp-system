const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get single product
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// Create product
const createProduct = async (req, res) => {
  const { name, sku, price, quantity } = req.body;
  const product = await Product.create({ name, sku, price, quantity });
  res.status(201).json(product);
};

// Update product
const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// Delete product
const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Product deleted" });
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
