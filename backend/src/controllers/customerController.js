const Customer = require("../models/Customer");

// Get all customers
const getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};

// Get customer by ID
const getCustomerById = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.status(404).json({ message: "Customer not found" });
  res.json(customer);
};

// Create customer
const createCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;
  const customer = await Customer.create({ name, email, phone, address });
  res.status(201).json(customer);
};

// Update customer
const updateCustomer = async (req, res) => {
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!customer) return res.status(404).json({ message: "Customer not found" });
  res.json(customer);
};

// Delete customer
const deleteCustomer = async (req, res) => {
  const customer = await Customer.findByIdAndDelete(req.params.id);
  if (!customer) return res.status(404).json({ message: "Customer not found" });
  res.json({ message: "Customer deleted" });
};

module.exports = { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };
