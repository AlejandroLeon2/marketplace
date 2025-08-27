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
    const fistAticle = lists[0];

    showArticulosDeCategoria(fistAticle)
    
}

export function eventolista(event:Event):void{
    if(event.target instanceof HTMLElement && event.target.closest('li')){
        console.log(`rradar`);
        
        showArticulosDeCategoria(event.target.textContent);
    }
}