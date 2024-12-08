import express from "express";
import {
  getProveedores,
  getProveedorById,
  createProveedor,
  updateProveedor,
  deleteProveedor,
} from "../Controllers/proveedorController.js"; // Ruta corregida

const router = express.Router();

// Definición de las rutas para proveedores
router.route("/") // Ruta raíz de proveedores
  .get(getProveedores)    // Obtener todos los proveedores
  .post(createProveedor); // Crear un nuevo proveedor

router.route("/:id") // Ruta con parámetro ID para operaciones específicas
  .get(getProveedorById)   // Obtener un proveedor por ID
  .put(updateProveedor)    // Actualizar un proveedor existente
  .delete(deleteProveedor); // Eliminar un proveedor

export default router;
