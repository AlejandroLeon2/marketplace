import { db } from "../config/firebase.js";
import { CompraDTO } from "../dtos/CompraDTO.js";

export const registrarCompra = async (
  compra: CompraDTO
): Promise<CompraDTO & { id: string }> => {
  const compraRef = await db.collection("compras").add({
    clienteId: compra.clienteId,
    fecha: compra.fecha,
    items: compra.items.map((item) => ({
      productoId: item.productoId,
      precioUnitario: item.precioUnitario,
    })),
    total: compra.total,
  });

  return {
    id: compraRef.id,
    ...compra,
  };
};

export const obtenerComprasPorCliente = async (
  clienteId: string
): Promise<(CompraDTO & { id: string })[]> => {
  const snapshot = await db
    .collection("compras")
    .where("clienteId", "==", clienteId)
    .orderBy("fecha", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as CompraDTO),
  }));
};

export const obtenerComprasPorFecha = async (
  clienteId: string,
  anio: number,
  mes: number
): Promise<(CompraDTO & { id: string })[]> => {
  const inicio = new Date(anio, mes - 1, 1);
  const fin = new Date(anio, mes, 1);

  const snapshot = await db
    .collection("compras")
    .where("clienteId", "==", clienteId)
    .where("fecha", ">=", inicio)
    .where("fecha", "<", fin)
    .orderBy("fecha", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as CompraDTO),
  }));
};
