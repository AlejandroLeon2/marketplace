import { takeInformation } from "./services";
import { trueData } from "./logic";
import { renderArticles, boxMostWanted } from "./dom";

export async function showMasVendidos():Promise<void>{
    const datos = await takeInformation();
    const datosFiltrados = trueData(datos)

    if(boxMostWanted instanceof HTMLElement ){
        renderArticles(datosFiltrados, boxMostWanted)
    }
}

export function eventoArticulo(event: Event){
    
    if(event.target instanceof HTMLElement && event.target.tagName === "ARTICLE"){
        console.log(`Script de salto de pagina a incorporar`);
        window.location.href = '#'
        
    }
}