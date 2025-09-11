
import Stripe from "stripe";
import "dotenv/config";

const stripekey = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-08-16" as any, //revisar la version 
});

export const stripe = stripekey