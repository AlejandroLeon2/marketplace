import type {Libro} from "../types/libro"
export interface CarritoItem {
  producto: Libro;
  cantidad: number;
  subtotal: number; // producto.precio * cantidad
}