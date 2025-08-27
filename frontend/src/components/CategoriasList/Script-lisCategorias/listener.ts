import { boxLists } from "./dom";
import { eventolista } from "./core";

export function eventoCategorias ():void{
    boxLists?.addEventListener('click', eventolista)
}