import { boxLists } from "./dom";
import { eventolista } from "./core";

export function eventoCategorias ():void{
    if(boxLists instanceof HTMLElement){
        boxLists.textContent = "";
        boxLists.addEventListener('click', eventolista)
    }
    
}