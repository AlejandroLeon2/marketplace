import { generadorDeArticulos } from "./generadorArticles";

export const masVendidos = document.getElementById("masVendidos");
export type MostWanted = {
//  id: number | string,   id no disponible en ejemplo
    pick: string,
    title:string,
    autor:string
}


export function renderArticles(data: MostWanted[], ubicacion: HTMLElement): void {

    // convertimos cada objeto en un HTMLElement
    const allElements: HTMLElement[] = data.map((item, Index) => {
        return generadorDeArticulos(item, (Index+1).toString());
    });
    // iteramos elementos y los agregas al DOM
    allElements.forEach(element => {
        ubicacion.appendChild(element);
    });
}