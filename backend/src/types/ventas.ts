export interface Venta {
  id?: string;
  productoId?: string;
  cantidad: number;
  precioUnitario: number;
  fecha: Date;
  clienteId: string;
};
