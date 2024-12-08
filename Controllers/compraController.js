import Compra from "../models/compraModel.js";

// Obtener todas las compras
export const getCompras = async (req, res) => {
  try {
    const compras = await Compra.find({}); // No necesita populate porque ya no hay referencias
    res.json(compras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una compra por ID
export const getCompraById = async (req, res) => {
  try {
    const compra = await Compra.findById(req.params.id);
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
    const compra = new Compra(req.body); // Se espera que req.body contenga los datos correctos
    const compraCreada = await compra.save();
    res.status(201).json(compraCreada);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Número de factura ya existe" });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};

// Actualizar una compra
export const updateCompra = async (req, res) => {
  try {
    const compra = await Compra.findById(req.params.id);
    if (compra) {
      Object.assign(compra, req.body); // Actualiza solo los campos proporcionados
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
      await compra.deleteOne();
      res.json({ message: "Compra eliminada" });
    } else {
      res.status(404).json({ message: "Compra no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
