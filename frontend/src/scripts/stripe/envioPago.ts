interface LibroCarrito {
  idprice?: string;
}

interface ProductoStripe {
  price: string;
  quantity: number;
}

import { urlBase } from "../../services/urlBase";

const checkoutButton = document.getElementById("checkout");

if (checkoutButton) {
  checkoutButton.addEventListener("click", async () => {
    const raw = localStorage.getItem("carrito");
    if (!raw) {
      alert("El carrito está vacío.");
      return;
    }

    let carrito: LibroCarrito[];

    try {
      carrito = JSON.parse(raw);
    } catch (error) {
      console.error("Error al parsear el carrito:", error);
      alert("Datos del carrito inválidos.");
      return;
    }

    const producto: ProductoStripe[] = carrito
      .filter((item): item is Required<Pick<LibroCarrito, "idprice">> => typeof item.idprice === "string")
      .map(item => ({
        price: item.idprice,
        quantity: 1
      }));

    if (producto.length === 0) {
      alert("No hay productos válidos para pagar.");
      return;
    }

    try {
      const response = await fetch(`${urlBase}/api/checkout/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ producto })
      });

      const data: { url?: string } = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Respuesta inesperada:", data);
        alert("No se pudo crear la sesión de pago.");
      }
    } catch (err) {
      console.error("Error en checkout:", err);
      alert("Error al procesar el pago.");
    }
  });
}
