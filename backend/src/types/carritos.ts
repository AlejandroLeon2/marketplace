import type {ItemCompra} from "../../src/types/items.js"
export interface ICarrito {
  clienteId: string;
  items:ItemCompra[];
}
