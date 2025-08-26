import { boxMostWanted } from "./dom";
import { eventoArticulo } from "./core";

export function eventoMasVendido() :void {
    boxMostWanted?.addEventListener('click', eventoArticulo);
}