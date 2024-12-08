import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema(
  {
    nitProveedor: { // Número de Identificación Tributaria del proveedor
      type: Number,
      required: true,
      unique: true,
    },
    contacto: { // Nombre de la persona de contacto
      type: String,
      required: true,
    },
    nombreEmpresa: { // Nombre de la empresa
      type: String,
      required: true,
    },
    direccionEmpresa: { // Dirección física de la empresa
      type: String,
      required: true,
    },
    deptoEmpresa: { // Departamento donde está ubicada la empresa
      type: String,
      required: true,
    },
    paisEmpresa: { // País de la empresa
      type: String,
      required: true,
    },
    ciudEmpresa: { // Ciudad de la empresa
      type: String,
      required: true,
    },
    telefProveedor: { // Teléfono de contacto
      type: Number,
      required: true,
    },
    emailProveedor: { // Email de contacto
      type: String,
      required: true,
    },
    estadoProveedor: { // Estado del proveedor (activo o no)
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
  }
);

const Proveedor =
  mongoose.models.Proveedor || mongoose.model("Proveedor", proveedorSchema);

export default Proveedor;
