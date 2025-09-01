import type {CarritoItem} from "../types/carritoItem";

export interface Carrito {
  items: CarritoItem[];
  total: number;
  estado: 'vacío' | 'completado';
  fechaCreacion: Date;
}