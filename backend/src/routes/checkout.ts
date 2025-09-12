import { Router } from "express";
import { stripe } from "../config/stripe.js";

const router = Router();

router.post("/create-checkout-session", async (req, res) => {
const  producto= req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: producto,
      success_url: "https://marketplace-kjup2ule4-alejandro82s-projects.vercel.app/inicio-usuario",
      cancel_url: "https://marketplace-kjup2ule4-alejandro82s-projects.vercel.app/carrito-pago",
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error("Error creando sesión:", err);
    res.status(500).json({ error: "No se pudo crear la sesión de pago" });
  }
});

export default router;
