import { db } from "../config/firebase.js";
import { VentaDTO } from "../dtos/VentaDTO.js";

export const registrarVenta = async (venta: VentaDTO): Promise<VentaDTO & { id: string }> => {
  const ventaRef = await db.collection("ventas").add({
    productoId: venta.productoId,
    precioUnitario: venta.precioUnitario,
    fecha: venta.fecha,
    clienteId: venta.clienteId,
  });

  return {
    id: ventaRef.id,
    ...venta,
  };
};

export const obtenerVentasPorCliente = async (clienteId: string): Promise<(VentaDTO & { id: string })[]> => {
  const snapshot = await db
    .collection("ventas")
    .where("clienteId", "==", clienteId)
    .orderBy("fecha", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as VentaDTO),
  }));
};
export const obtenerVentasPorClienteYFecha = async (
  clienteId: string,
  anio: number,
  mes: number
): Promise<(VentaDTO & { id: string })[]> => {
  const inicio = new Date(anio, mes - 1, 1); 
  const fin = new Date(anio, mes, 1); 

  const snapshot = await db
    .collection("ventas")
    .where("clienteId", "==", clienteId)
    .where("fecha", ">=", inicio)
    .where("fecha", "<", fin)
    .orderBy("fecha", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as VentaDTO),
  }));
};