import type { articulo } from "./dom";
    
    export function generadorDeArticulos (obj:articulo) :HTMLElement {

        // Crear el artículo principal
        const article = document.createElement("article");
        article.className = "w-45 shadow-xl h-[270px] flex flex-col gap-4";
        // Crear la imagen
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = obj.pick;
        img.alt = `Portada del libro ${obj.title}`;
        img.className = "w-full h-full  object-cover";

        figure.appendChild(img);


        // Crear el div para el título y autor
        const textDiv = document.createElement("div");
        textDiv.className = "px-4";

        const h2 = document.createElement("h4");
        h2.className = "text-sm h-10 overflow-hidden";
        h2.textContent = obj.title;

        const h3 = document.createElement("h3");
        h3.className = "w-full text-xs";
        h3.textContent = obj.autor;

        textDiv.appendChild(h2);
        textDiv.appendChild(h3);

        // Ensamblar todo dentro del article
        article.appendChild(figure);
        article.appendChild(textDiv);

        // Finalmente, lo agregamos al body (o a otro contenedor)
        return article;
    }