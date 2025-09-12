import { stripe } from "./config/stripe.js";

export const createCheckoutSession = async (customerId: string, priceId: string) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer: customerId, // 🔗 lo conectas con el cliente creado al registrarse
    line_items: [
      {
        price: priceId, // el ID de precio de tu libro (en Stripe)
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/success", // URL donde redirige si paga bien
    cancel_url: "http://localhost:3000/cancel",   // URL donde redirige si cancela
  });

  return session.url; // devuelves esta URL al frontend
};
