import { boxLists, boxContain } from "./dom";
import { eventolista } from "./core";

export function eventoCategorias ():void{
    if(boxLists instanceof HTMLElement && boxContain instanceof HTMLElement){
        boxLists.addEventListener('click', eventolista)
    }
    
}