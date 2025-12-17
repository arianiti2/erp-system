const Order = require("../models/Order");

// Get all orders
const getOrders = async (req, res) => {
  const orders = await Order.find().populate("customer").populate("products.product");
  res.json(orders);
};

// Get order by ID
const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate("customer").populate("products.product");
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

// Create new order
const createOrder = async (req, res) => {
  const { customer, products, total } = req.body;
  const order = await Order.create({ customer, products, total });
  res.status(201).json(order);
};

// Update order
const updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

// Delete order
const deleteOrder = async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json({ message: "Order deleted" });
};

module.exports = { getOrders, getOrderById, createOrder, updateOrder, deleteOrder };
