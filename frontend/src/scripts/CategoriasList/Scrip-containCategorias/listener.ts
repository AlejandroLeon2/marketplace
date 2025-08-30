import { boxContain } from "./dom";
import { eventoArticulo } from "./core";

export function eventoShowItem() :void {
    if(boxContain instanceof HTMLElement){
        boxContain.addEventListener('click', eventoArticulo);
        console.log(`radas`);
        
    }
}