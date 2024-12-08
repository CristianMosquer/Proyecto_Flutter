import mongoose from "mongoose";

// Esquema para los datos de Proveedor
const proveedorSchema = new mongoose.Schema({
  nitProveedor: {
    type: Number,
    required: true,
    unique: true,
  },
  contacto: {
    type: String,
    required: true,
  },
  nombreEmpresa: {
    type: String,
    required: true,
  },
  direccionEmpresa: {
    type: String,
    required: true,
  },
  deptoEmpresa: {
    type: String,
    required: true,
  },
  paisEmpresa: {
    type: String,
    required: true,
  },
  ciudEmpresa: {
    type: String,
    required: true,
  },
  telefProveedor: {
    type: Number,
    required: true,
  },
  emailProveedor: {
    type: String,
    required: true,
  },
  estadoProveedor: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

const Proveedor = mongoose.model("Proveedor", proveedorSchema);
export default Proveedor;
