// src/createProduct.ts
import Stripe from "stripe";
import "dotenv/config";

// Inicializar Stripe con tu clave secreta del .env
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-08-16" as any, //revisar la version 
});

async function createProduct() {
  try {
    const name = "Libre TypeScript";
    const description = "Creación de un producto de prueba";
    const unit_amount = 1200; // 120.00 soles
    const currency = "pen";   // Soles peruanos

    // Crear producto
    const product = await stripe.products.create({
      name,
      description,
    });

    // Crear precio asociado
    const price = await stripe.prices.create({
      unit_amount,
      currency,
      product: product.id,
    });

    console.log("Éxito! Producto creado id:", product.id);
    console.log("Éxito! Precio creado id:", price.id);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error creando producto:", error.message);
    } else {
      console.error("Error desconocido:", error);
    }
  }
}

createProduct();

