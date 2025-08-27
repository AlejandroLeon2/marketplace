import { getInformation } from "./services";
import { extractorDeDatos } from "./logic";
import { boxContain, renderArticles, NameList } from "./dom";
import type { articulo } from "./dom";

export async function showArticulosDeCategoria(tipo:string) {
    const data = await getInformation();
    const datosFiltrados:articulo[] = extractorDeDatos(data);    

    if(boxContain instanceof HTMLElement && NameList instanceof HTMLElement ){
        NameList.textContent = tipo;
        
        renderArticles(datosFiltrados, boxContain);

    };
}