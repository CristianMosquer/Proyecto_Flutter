import express from "express";
import {
  getCompras,
  getCompraById,
  createCompra,
  updateCompra,
  deleteCompra,
} from "../Controllers/compraController.js"; // Importa las funciones del controlador actualizado

const router = express.Router();

// Definición de las rutas para compras
router.route("/") // Ruta raíz de compras
  .get(getCompras)     // Obtener todas las compras
  .post(createCompra); // Crear una nueva compra

router.route("/:id") // Ruta con parámetro ID para operaciones específicas
  .get(getCompraById)   // Obtener una compra por ID
  .put(updateCompra)    // Actualizar una compra existente
  .delete(deleteCompra); // Eliminar una compra

export default router;
