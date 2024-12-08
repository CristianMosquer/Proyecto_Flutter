import Proveedor from "../models/proveedor.js";

// Obtener todos los proveedores
export const getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find({});
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un proveedor por ID
export const getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (proveedor) {
      res.json(proveedor);
    } else {
      res.status(404).json({ message: "Proveedor no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo proveedor
export const createProveedor = async (req, res) => {
  try {
    const proveedor = new Proveedor(req.body);
    const proveedorCreado = await proveedor.save();
    res.status(201).json(proveedorCreado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un proveedor
export const updateProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (proveedor) {
      Object.assign(proveedor, req.body);
      const proveedorActualizado = await proveedor.save();
      res.json(proveedorActualizado);
    } else {
      res.status(404).json({ message: "Proveedor no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un proveedor
export const deleteProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (proveedor) {
      await proveedor.deleteOne();
      res.json({ message: "Proveedor eliminado" });
    } else {
      res.status(404).json({ message: "Proveedor no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
