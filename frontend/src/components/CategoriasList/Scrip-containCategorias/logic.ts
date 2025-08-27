import type { articulo } from "./dom";

export function extractorDeDatos (array:any[]):articulo[] {

    let allData:articulo[]=[]

    for (const obj of array) {
        const newData :articulo = {
            pick: obj.imagen,
            title: obj.titulo,
            autor: obj.autor,
            precio: obj.precio
        };
        allData.push(newData)
    }

    return allData
}