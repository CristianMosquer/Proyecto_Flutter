import Compra from "../models/compraModel.js";

// Obtener todas las compras
export const getCompras = async (req, res) => {
  try {
    const compras = await Compra.find({});
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
    const compra = new Compra({
      proveedor: req.body.proveedor,
      facturaProveedor: req.body.facturaProveedor,
      cantidad: req.body.cantidad,
      total: req.body.total,
      fechaCompra: req.body.fechaCompra || Date.now(),
      estadoCompra: req.body.estadoCompra ?? true, // Valor por defecto si no se proporciona
    });

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
      compra.proveedor = req.body.proveedor ?? compra.proveedor;
      compra.facturaProveedor =
        req.body.facturaProveedor ?? compra.facturaProveedor;
      compra.cantidad = req.body.cantidad ?? compra.cantidad;
      compra.total = req.body.total ?? compra.total;
      compra.fechaCompra = req.body.fechaCompra ?? compra.fechaCompra;
      compra.estadoCompra = req.body.estadoCompra ?? compra.estadoCompra;

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
