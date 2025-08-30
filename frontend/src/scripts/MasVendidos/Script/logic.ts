
import type { MostWanted } from "./dom";

    export function trueData(array:any[]) : MostWanted[] {

        let allData:MostWanted[] =[];

        for (const obj of array) {
            if(obj.titulo.length >= 1){
                const newData :MostWanted = {
                    pick: obj.imagen,
                    title: obj.titulo,
                    autor: obj.autor
                };

                allData.push(newData);
            }
        }

        return allData;
    }