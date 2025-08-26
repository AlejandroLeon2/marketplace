import type { MostWanted } from "./dom";
    
    export function generadorDeArticulos (obj:MostWanted, Numero: string) :HTMLElement {

        // Crear el artículo principal
        const article = document.createElement("article");
        article.className = "w-full border h-full border-t-amber-300 flex p-1";

        // Crear la imagen
        const img = document.createElement("img");
        img.src = obj.pick;
        img.alt = "foto";
        img.className = "w-[30%] h-full bg-sky-300";

        // Crear el div para el número
        const numberDiv = document.createElement("div");
        numberDiv.className = "w-[10%] h-full flex justify-center";

        const span = document.createElement("span");
        span.id = "number";
        span.className = "rounded-[100%] border w-full h-[20px] grid place-items-center font-bold text-[11px]";
        span.textContent = Numero;

        numberDiv.appendChild(span);

        // Crear el div para el título y autor
        const textDiv = document.createElement("div");
        textDiv.className = "w-[70%] h-full p-1";

        const h4 = document.createElement("h4");
        h4.id = "tittle";
        h4.className = "w-full text-[1rem] font-bold";
        h4.textContent = obj.title;

        const h3 = document.createElement("h3");
        h3.id = "autor";
        h3.className = "w-full text-[0.9rem]";
        h3.textContent = obj.autor;

        textDiv.appendChild(h4);
        textDiv.appendChild(h3);

        // Ensamblar todo dentro del article
        article.appendChild(img);
        article.appendChild(numberDiv);
        article.appendChild(textDiv);

        // Finalmente, lo agregamos al body (o a otro contenedor)
        return article;
    }