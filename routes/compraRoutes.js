import express from "express";
import {
  getCompras,
  getCompraById,
  createCompra,
  updateCompra,
  deleteCompra,
} from "../Controllers/compraController.js"; // Ruta corregida

const router = express.Router();

// Definición de las rutas para compras
router.route("/").get(getCompras).post(createCompra);
router.route("/:id").get(getCompraById).put(updateCompra).delete(deleteCompra);

export default router;
