import { showList } from "./Script-lisCategorias/core";
import { eventoCategorias } from "./Script-lisCategorias/listener";

export function indexListaCategorias ():void{
    showList()
    eventoCategorias()
}