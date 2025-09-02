import type { MostWanted } from "./dom";

export function generadorDeArticulos(
  obj: MostWanted,
  Numero: string
): HTMLElement {
  // Crear el artículo principal
  const article = document.createElement("article");
  article.className = "w-full h-full flex  ";

  // Crear la imagen
  const img = document.createElement("img");
  img.src = obj.pick;
  img.alt = "foto";
  img.className = "w-20 min-h-25 border  object-cover h-full ";

  const span = document.createElement("span");
  span.id = "number";
  span.className =
    "rounded-[100%] border w-auto px-1.5 h-[20px] grid place-items-center font-bold text-[11px]";
  span.textContent = Numero;

  // Crear el div para el título y autor
  const textDiv = document.createElement("div");
  textDiv.className = "w-[70%] h-full p-1";

  const h2 = document.createElement("h2");
  h2.id = "tittle";
  h2.className = "w-full text-[1rem] font-bold";
  h2.textContent = obj.title;

  const p = document.createElement("p");
  p.id = "autor";
  p.className = "w-full text-[0.9rem]";
  p.textContent = obj.autor;

  textDiv.appendChild(h2);
  textDiv.appendChild(p);

  // Ensamblar todo dentro del article
  article.appendChild(img);
  article.appendChild(span);
  article.appendChild(textDiv);

  // Finalmente, lo agregamos al body (o a otro contenedor)
  return article;
}
