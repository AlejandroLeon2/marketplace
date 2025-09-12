import type { Request, Response } from "express";
import { registrarCompra, obtenerComprasPorCliente, obtenerComprasPorFecha} from "../services/ComprasServices.js";
import { CompraDTO } from "../dtos/CompraDTO.js";
import { validate } from "class-validator";
import { ItemCompraDTO } from "../dtos/ItemCompraDTO.js";

export const crearCompra = async (req: Request, res: Response) => {
  const { clienteId, fecha, items, total } = req.body;

  // Validar que items sea un arreglo no vacío
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "items debe ser un arreglo no vacío" });
  }

  // Instanciar manualmente cada ItemCompraDTO
  const itemInstancias: ItemCompraDTO[] = [];
  for (const item of items) {
    const instancia = new ItemCompraDTO();
    instancia.productoId = item.productoId;
    instancia.precioUnitario = item.precioUnitario;

    const erroresItem = await validate(instancia);
    if (erroresItem.length > 0) {
      return res.status(400).json({ error: "Item inválido", detalles: erroresItem });
    }

    itemInstancias.push(instancia);
  }

  // Instanciar CompraDTO
  const compra = new CompraDTO();
  compra.clienteId = clienteId;
  compra.fecha = new Date(fecha);
  compra.items = itemInstancias;
  compra.total = total;

  // Validar CompraDTO
  const erroresCompra = await validate(compra);
  if (erroresCompra.length > 0) {
    return res.status(400).json({ error: "Compra inválida", detalles: erroresCompra });
  }

  try {
    const compraRegistrada = await registrarCompra(compra);
    res.status(201).json(compraRegistrada);
  } catch (error) {
    console.error("Error al registrar compra:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};




export const getComprasPorCliente = async (req: Request, res: Response) => {
  const { clienteId } = req.params;

  if (!clienteId) {
    return res.status(400).json({ error: "clienteId es requerido" });
  }

  try {
    const compras = await obtenerComprasPorCliente(clienteId);
    res.status(200).json(compras);
  } catch (error) {
    console.error("Error al obtener compras:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


export const getComprasFecha = async (req: Request, res: Response) => {
  const { clienteId } = req.params;
  const { anio, mes } = req.query;

  if (!clienteId || !anio || !mes) {
    return res.status(400).json({ error: "clienteId, anio y mes son requeridos" });
  }

  try {
    const compras = await obtenerComprasPorFecha(
      clienteId,
      Number(anio),
      Number(mes)
    );
    res.status(200).json(compras);
  } catch (error) {
    console.error("Error al obtener compras por fecha:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
