const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");
const { errorHandler } = require("./src/middlewares/errorMiddleware");
const morgan = require("morgan");
const path = require('path'); 
// Routes
const authRoutes = require("./src/routes/authRoutes");
const inventoryRoutes = require("./src/routes/inventoryRoutes");
const salesRoutes = require("./src/routes/salesRoutes");
const customerRoutes = require("./src/routes/customerRoutes");

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); 

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/customers", customerRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
