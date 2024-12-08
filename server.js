import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import proveedorRoutes from "./routes/proveedorRoutes.js";
import compraRoutes from "./routes/compraRoutes.js"; // Ruta corregida

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware globales
app.use(cors()); // Habilitar CORS para solicitudes desde diferentes dominios
app.use(express.json()); // Permitir lectura de JSON en las solicitudes

// Rutas principales
app.use("/api/proveedores", proveedorRoutes);
app.use("/api/compras", compraRoutes); // Ruta corregida para compras

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// Middleware para manejar errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Error interno del servidor",
  });
});

// Configuración del puerto y escucha del servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
