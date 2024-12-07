// proveedor.js
import mongoose from "mongoose";

// Esquema para los datos de Proveedor
const proveedorSchema = new mongoose.Schema(
  {
    // Número de Identificación Tributaria del proveedor
    nitProveedor: {
      type: Number,
      required: true,
      unique: true,
    },
    // Nombre del contacto principal
    contacto: {
      type: String,
      required: true,
    },
    // Nombre de la empresa
    nombreEmpresa: {
      type: String,
      required: true,
    },
    // Dirección de la empresa
    direccionEmpresa: {
      type: String,
      required: true,
    },
    // Departamento donde se encuentra la empresa
    deptoEmpresa: {
      type: String,
      required: true,
    },
    // País de la empresa
    paisEmpresa: {
      type: String,
      required: true,
    },
    // Ciudad de la empresa
    ciudEmpresa: {
      type: String,
      required: true,
    },
    // Teléfono del proveedor
    telefProveedor: {
      type: Number,
      required: true,
    },
    // Correo electrónico del proveedor
    emailProveedor: {
      type: String,
      required: true,
    },
    // Estado del proveedor (activo/inactivo)
    estadoProveedor: {
      type: Boolean,
      default: true,
    },
  },
  {
    // Añade automáticamente createdAt y updatedAt
    timestamps: true,
  }
);

// Crear el modelo a partir del esquema
const Proveedor = mongoose.model("Proveedor", proveedorSchema);

export default Proveedor;
