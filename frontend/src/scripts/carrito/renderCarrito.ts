import { obtenerCarrito, eliminarDelCarrito  } from "./carrito";
import type { Libro } from "../../models/Producto";

export function crearItemCarrito(libro: Libro): HTMLLIElement {
  const li = document.createElement("li");

  const article = document.createElement("article");
  article.className = "flex rounded-sm shadow overflow-hidden w-full bg-white";

  const img = document.createElement("img");
  img.src = libro.imagen || "/images/gato.jpg";
  img.alt = `Portada del libro ${libro.titulo}`;
  img.className = "w-15 object-cover";

  const divInfo = document.createElement("div");
  divInfo.className = "px-4 py-2 w-full";

  const header = document.createElement("div");
  header.className = "flex justify-between mb-1";

  const h3 = document.createElement("h3");
  h3.className = "max-w-50 font-semibold h-10 text-sm";
  h3.textContent = libro.titulo;

  const categoria = document.createElement("p");
  categoria.className = "text-xs";
  categoria.textContent = libro.categoria ?? "";

  const boton = document.createElement("button");
  boton.className = "text-red-500 h-5.5 botonRojo";
boton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="24" height="24" viewBox="0 0 24 24"
       fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" class="p-1">
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
    <path d="M3 6h18"></path>
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
`;


  boton.addEventListener("click", () => {
    if (libro.id) {
      eliminarDelCarrito(libro.id);
    } else {
      console.warn("El libro no tiene un ID definido.");
    }
    const contenedor = document.getElementById("carrito");
    if (contenedor instanceof HTMLElement) {
      renderizarCarrito(contenedor);
    } else {
      console.warn("No se encontró el contenedor del carrito.");
    }
  });

  const precio = document.createElement("p");
  precio.className = "text-morado";
  precio.textContent = `S/. ${libro.precio?.toFixed(2)}`;

  header.appendChild(h3);
  if (libro.categoria) header.appendChild(categoria);
  header.appendChild(boton);

  divInfo.appendChild(header);
  divInfo.appendChild(precio);

  article.appendChild(img);
  article.appendChild(divInfo);
  li.appendChild(article);

  return li;
}

export function renderizarCarrito(contenedor: HTMLElement): void {
  const carrito = obtenerCarrito();
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  carrito.forEach((libro) => {
    const item = crearItemCarrito(libro);
    contenedor.appendChild(item);
  });
}

export function iniciarRenderizadoCarrito(id:string): void {
  const contenedor = document.getElementById(id);
  if (contenedor instanceof HTMLElement) {
    renderizarCarrito(contenedor);
  } else {
    console.error("No se encontró el elemento con id 'carrito'.");
  }
}
