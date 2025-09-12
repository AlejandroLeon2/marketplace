import { CarritoDTO } from '../dtos/CarritoDTO.js';
import { db } from '../config/firebase.js';

export class CarritoService {
  async guardarCarrito(dto: CarritoDTO): Promise<void> {
    const ref = db.collection('users').doc(dto.clienteId).collection('carrito').doc('activo');
    await ref.set({
      items: dto.items.map(item => ({
        productoId: item.productoId,
        precioUnitario: item.precioUnitario
      })),
      timestamp: Date.now()
    });
  }

  async obtenerCarrito(clienteId: string): Promise<(CarritoDTO & { id: string }) | null> {
    const ref = db.collection('users').doc(clienteId).collection('carrito').doc('activo');
    const doc = await ref.get();

    if (!doc.exists) return null;

    const data = doc.data();
    if (!data || !Array.isArray(data.items)) return null;

    return {
      clienteId,
      items: data.items,
      id: doc.id
    };
  }
}
