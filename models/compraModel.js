import mongoose from "mongoose";
const compraSchema = new mongoose.Schema(
  {
    idProveedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proveedor",
      required: true,
    },
    facturaProveedor: {
      type: Number,
      required: true,
      unique: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    fechaCompra: {
      type: Date,
      default: Date.now,
    },
    estadoCompra: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Compra = mongoose.model("Compra", compraSchema);
export default Compra;
