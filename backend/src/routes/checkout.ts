import { Router } from "express";
import { stripe } from "../config/stripe.js";

const router = Router();

router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: "price_12345", // usa el ID real de Stripe
          quantity: 1,
        },
      ],
      success_url: "http://localhost:4321/success",
      cancel_url: "http://localhost:4321/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Error creando sesión:", err);
    res.status(500).json({ error: "No se pudo crear la sesión de pago" });
  }
});

export default router;
