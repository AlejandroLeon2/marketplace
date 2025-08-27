    import { generadorDeArticulos } from "./generadorArticles";

    export const NameList = document.getElementById("name-list");
    export const boxContain = document.getElementById("box-contain");

    export type articulo = {
        pick: string,
        title:string,
        autor:string
        precio:number
    }

    export function renderArticles(array:articulo[] , contenedor:HTMLElement):void{
        array.forEach((obj) =>{
            contenedor.appendChild(generadorDeArticulos(obj))
        })
    }