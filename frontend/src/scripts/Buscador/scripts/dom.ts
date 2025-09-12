export const inputBuscador = document.getElementById("buscador") as HTMLInputElement;
export const boxResults = document.getElementById("resultados") as HTMLElement;

import type { ItemsProducts } from "./logic";

function generadorItem(obj:ItemsProducts):HTMLElement{
    const a = document.createElement("a");
    a.href = '#';
    a.className = "flex items-center gap-3 w-full h-[70px] p-2 rounded-lg hover:bg-gray-100 "

    const figure = document.createElement("figure")
    const img = document.createElement("img");

    figure.className = "flex-shrink-0 w-[50px] h-[50px] overflow-hidden rounded-md";
    img.src = obj.foto;
    img.alt = obj.titulo;
    img.className = "w-full h-full object-cover";

    figure.appendChild(img);

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");

    div.className = "flex flex-col justify-center";
    h2.innerText = obj.titulo;
    h3.innerText = obj.autor;

    h2.className = "text-sm font-semibold text-gray-800 truncate";
    h3.className = "text-xs text-gray-500";

    div.appendChild(h2);
    div.appendChild(h3);

    a.appendChild(figure);
    a.appendChild(div);

    return a;
};
export function renderItems(box:HTMLElement, array:ItemsProducts[]):void {
    while(box.firstChild){
        box.removeChild(box.firstChild);
    };

    array.forEach(obj =>{
        const element = generadorItem(obj);
        box.appendChild(element);
    });
};