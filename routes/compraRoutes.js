import express from "express";
import {
  getCompras,
  getCompraById,
  createCompra,
  updateCompra,
  deleteCompra,
} from "../Controllers/compraController";


const router = express.Router();

router.route("/").get(getCompras).post(createCompra);

router.route("/:id").get(getCompraById).put(updateCompra).delete(deleteCompra);

export default router;
