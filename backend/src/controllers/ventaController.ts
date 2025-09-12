import type { Request, Response } from "express";
import { registrarVenta, obtenerVentasPorCliente } from "../services/VentaServices.js";
import { VentaDTO } from "../dtos/VentaDTO.js";
import { validate } from "class-validator";

export const crearVenta = async (req: Request, res: Response) => {
  const dto = Object.assign(new VentaDTO(), req.body);
  const errores = await validate(dto);

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  try {
    const ventaRegistrada = await registrarVenta(dto);
    res.status(201).json(ventaRegistrada);
  } catch (error) {
    console.error("Error al registrar venta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
export const obtenerVentasCliente = async (req: Request, res: Response) => {
  const { clienteId } = req.params;

  if (!clienteId) {
    return res.status(400).json({ error: "clienteId es requerido" });
  }

  try {
    const ventas = await obtenerVentasPorCliente(clienteId);
    res.status(200).json(ventas);
  } catch (error) {
    console.error("Error al obtener ventas:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
