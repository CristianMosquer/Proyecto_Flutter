import Compra from "../models/compraModel.js";

// Obtener todas las compras
export const getCompras = async (req, res) => {
  try {
    const compras = await Compra.find({}).populate("idProveedor");
    res.json(compras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una compra por ID
export const getCompraById = async (req, res) => {
  try {
    const compra = await Compra.findById(req.params.id).populate("idProveedor");
    if (compra) {
      res.json(compra);
    } else {
      res.status(404).json({ message: "Compra no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva compra
export const createCompra = async (req, res) => {
  try {
    const compra = new Compra(req.body);
    const compraCreada = await compra.save();
    res.status(201).json(compraCreada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una compra
export const updateCompra = async (req, res) => {
  try {
    const compra = await Compra.findById(req.params.id);
    if (compra) {
      Object.assign(compra, req.body);
      const compraActualizada = await compra.save();
      res.json(compraActualizada);
    } else {
      res.status(404).json({ message: "Compra no encontrada" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una compra
export const deleteCompra = async (req, res) => {
  try {
    const compra = await Compra.findById(req.params.id);
    if (compra) {
      await compra.remove();
      res.json({ message: "Compra eliminada" });
    } else {
      res.status(404).json({ message: "Compra no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
