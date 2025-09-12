import type { Request, Response } from 'express';
import { validateOrReject } from 'class-validator';
import { ItemCompraDTO } from '../dtos/ItemCompraDTO.js';
import { CarritoDTO } from '../dtos/CarritoDTO.js';
import { CarritoService } from '../services/CarritosServices.js';

const carritoService = new CarritoService();

export const carritoController = {
  async guardarCarrito(req: Request, res: Response) {
    try {
      const dto = new CarritoDTO();

     dto.clienteId = req.body.clienteId;
      dto.items = req.body.items.map((item: any) => {
        const itemDto = new ItemCompraDTO();
        itemDto.productoId = item.productoId;
        itemDto.precioUnitario = item.precioUnitario;
        return itemDto;
      });

      await validateOrReject(dto);

      await carritoService.guardarCarrito(dto);
      res.status(200).json({ message: 'Carrito guardado correctamente' });
    } catch (error) {
      res.status(400).json({ error: 'Datos inválidos o incompletos', detalles: error });
    }
  },

  async obtenerCarrito(req: Request, res: Response) {
    try {
      const { clienteId } = req.params;
      if (!clienteId) {
        return res.status(400).json({ error: 'clienteId es requerido' });
      }

      const carrito = await carritoService.obtenerCarrito(clienteId);
      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
      }

      res.status(200).json(carrito);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el carrito', detalles: error });
    }
  }
};
