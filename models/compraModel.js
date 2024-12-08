import mongoose from "mongoose";

const compraSchema = new mongoose.Schema(
  {
    proveedor: { // Campo textual para el proveedor (nombre, NIT, o similar)
      type: String,
      required: true,
    },
    facturaProveedor: { // Número de la factura
      type: Number,
      required: true,
      unique: true,
    },
    cantidad: { // Cantidad de productos comprados
      type: Number,
      required: true,
    },
    total: { // Total del valor de la compra
      type: Number,
      required: true,
    },
    fechaCompra: { // Fecha en la que se realiza la compra
      type: Date,
      default: Date.now,
    },
    estadoCompra: { // Estado de la compra (activa o no)
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
  }
);

const Compra = mongoose.model("Compra", compraSchema);
export default Compra;
