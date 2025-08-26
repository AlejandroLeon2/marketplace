
import { MostWanted } from "./dom";

    export function trueData(array:any[]) : MostWanted[] {

        let allData:MostWanted[];

        for (const datos of array) {
            if(datos.titulo.length >= 1){
                const newData :MostWanted = {
                    pick: datos.imagen,
                    title: datos.titulo,
                    autor: datos.autor
                };

                allData.push(newData);
            }
        }

        return allData;
    }