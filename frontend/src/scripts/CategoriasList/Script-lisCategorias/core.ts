import { getInformation } from "./services";
import { checkData } from "./logic";
import { boxLists, RenderList } from "./dom";

import { showArticulosDeCategoria } from "../Scrip-containCategorias/core";

export async function showList (){
    const data:any = await getInformation();
    const lists = checkData(data);
    

    if(boxLists instanceof HTMLElement){
        RenderList(lists, boxLists);
    }
    const firstAticle = lists[0];

    showArticulosDeCategoria(firstAticle)
    
}

export function eventolista(event:Event):void{
    if(event.target instanceof HTMLElement && event.target.closest('li')){
        
        showArticulosDeCategoria(event.target.textContent);
    }
}
