import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import proveedorRoutes from "./routes/proveedorRoutes.js";
import compraRoutes from "./routes/compraRoutes.js";

dotenv.config(); // Cargar variables de entorno

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/proveedores", proveedorRoutes);
app.use("/api/compras", compraRoutes);

// Middleware para manejar errores
app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Error interno del servidor",
  });
});

// Configuración del puerto y servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
