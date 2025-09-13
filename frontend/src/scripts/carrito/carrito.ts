import type { Libro } from "../../models/Producto";
import { iniciarRenderizadoCarrito } from "./renderCarrito";

document.addEventListener("DOMContentLoaded", () => {
  actualizarContador()
    actualizarMontoEnDOM();
  iniciarRenderizadoCarrito("carrito");
  iniciarRenderizadoCarrito("carritopago");
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains("agregar-carrito")) {
      const libro: Libro = {
        id: target.dataset.id!,
        titulo: target.dataset.titulo!,
        descripcion: target.dataset.descripcion!,
        precio: parseFloat(target.dataset.precio!),
        imagen: target.dataset.imagen!,
        idprice: target.dataset.idprice!,
      };

      agregarAlCarrito(libro);
        iniciarRenderizadoCarrito("carrito");
  iniciarRenderizadoCarrito("carritopago");
  actualizarContador();
    }
  });
});

export function actualizarContador(): void {
  const carritoRaw = localStorage.getItem("carrito");
  const carrito = carritoRaw ? JSON.parse(carritoRaw) : [];
  const cantidad = carrito.length;

  const contador = document.getElementById("contador-carrito");
  if (contador instanceof HTMLElement) {
    contador.textContent = cantidad.toString();
    contador.style.display = cantidad > 0 ? "inline-block" : "none";
  }
}


export function actualizarMontoEnDOM(): void {
  const monto = calcularTotalCarrito();
  const elemento = document.getElementById("preciosMonto");

  if (elemento instanceof HTMLElement) {
    elemento.textContent = `S/. ${monto.toFixed(2)}`;
  }
}
export function calcularTotalCarrito(): number {
  const data = localStorage.getItem("carrito");
  if (!data) return 0;

  try {
    const carrito = JSON.parse(data) as { precio?: number }[];
    return carrito.reduce((sum, libro) => sum + (libro.precio ?? 0), 0);
  } catch {
    return 0;
  }
}

function agregarAlCarrito(libro: Libro): void {
  const carrito: Libro[] = obtenerCarrito();

  const yaExiste = carrito.some((item) => item.id === libro.id);
  if (!yaExiste) {
    carrito.push(libro);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(`Libro agregado: ${libro.titulo}`);
  } else {
    console.log(` El libro ya está en el carrito: ${libro.titulo}`);
  }
}

export function obtenerCarrito(): Libro[] {
  const data = localStorage.getItem("carrito");
  return data ? JSON.parse(data) : [];
}

export function eliminarDelCarrito(id: string): void {
  const nuevoCarrito = obtenerCarrito().filter((item) => item.id !== id);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  console.log(`Libro eliminado del carrito: ${id}`);
  iniciarRenderizadoCarrito("carrito");
  iniciarRenderizadoCarrito("carritopago");
  actualizarContador();
  actualizarMontoEnDOM();
}

export function limpiarCarrito(): void {
  localStorage.removeItem("carrito");
  console.log("Carrito limpiado");
}
