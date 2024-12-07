import express from "express";
import {
  getProveedores,
  getProveedorById,
  createProveedor,
  updateProveedor,
  deleteProveedor,
} from "../Controllers/proveedorController.js";

const router = express.Router();

/**
 * Rutas para gestionar proveedores
 */

// Ruta para obtener todos los proveedores y crear un nuevo proveedor
router
  .route("/")
  .get(async (req, res, next) => {
    try {
      await getProveedores(req, res);
    } catch (error) {
      next(error); // Manejo de errores
    }
  })
  .post(async (req, res, next) => {
    try {
      await createProveedor(req, res);
    } catch (error) {
      next(error); // Manejo de errores
    }
  });

// Ruta para manejar un proveedor específico por ID
router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      await getProveedorById(req, res);
    } catch (error) {
      next(error); // Manejo de errores
    }
  })
  .put(async (req, res, next) => {
    try {
      await updateProveedor(req, res);
    } catch (error) {
      next(error); // Manejo de errores
    }
  })
  .delete(async (req, res, next) => {
    try {
      await deleteProveedor(req, res);
    } catch (error) {
      next(error); // Manejo de errores
    }
  });

export default router;
