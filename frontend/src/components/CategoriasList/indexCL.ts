import { showList } from "./Script-lisCategorias/core";
import { eventoCategorias } from "./Script-lisCategorias/listener";
import { eventoShowItem } from "./Scrip-containCategorias/listener";

export function indexListaCategorias ():void{
    showList()
    eventoCategorias()
    eventoShowItem()
}