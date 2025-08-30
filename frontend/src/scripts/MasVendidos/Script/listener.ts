import { boxMostWanted } from "./dom";
import { eventoArticulo } from "./core";

export function eventoShowItem() :void {
    if(boxMostWanted instanceof HTMLElement){
        boxMostWanted.addEventListener('click', eventoArticulo);
    }
}