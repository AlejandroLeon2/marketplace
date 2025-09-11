import type { string } from "astro:schema";
import type { Libro } from "../../models/Producto";

export function initLibroFormHandler(formId: string, endpoint: string) {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById(formId) as HTMLFormElement;

    if (!form) {
      console.error(`Formulario con ID "${formId}" no encontrado.`);
      return;
    }

    form.addEventListener("submit", async (event: Event) => {
      event.preventDefault();

      const getInputValue = (id: string): string =>
        (
          document.getElementById(id) as HTMLInputElement | HTMLSelectElement
        )?.value.trim() || "";

      interface Usuario {
        uid: string;
        nombre: string;
        email: string;
      }
      type id = string | undefined;
      const local: Usuario = JSON.parse(
        localStorage.getItem("usuario") || "{}"
      );
      const id: id = local.uid;

      const libro: Libro = {
        titulo: getInputValue("titulo"),
        descripcion: getInputValue("descripcion"),
        autor: getInputValue("autor"),
        editorial: getInputValue("editorial"),
        precio: parseFloat(getInputValue("precio") || "0"),
        imagen: getInputValue("imagen"),
        categoria: getInputValue("categoria"),
        idioma: getInputValue("idioma"),
        anio_publicacion: getInputValue("anio_publicacion"),
        estado: getInputValue("estado"),
        formato: getInputValue("formato"),
        vendedorId: id,
      };

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(libro),
        });

        const res = await response.json();

        if (response.ok) {
          alert(res.mensaje || "Libro guardado con éxito");
          form.reset();
        } else {
          alert("Error al guardar el libro");
          console.error("Detalles del error:", res);
        }
      } catch (error) {
        alert("Error de conexión con el servidor");
        console.error("Error de red:", error);
      }
    });
  });
}

initLibroFormHandler(
  "formLibros",
  "http://localhost:3000/api/productos/libros"
);
