
export class UserDTO {
  uid!: string;
  email!: string;
  displayName!: string;
  photoURL?: string;
  createdAt!: Date;
  stripeCustomerId?: string; // 🔑 ID del cliente en Stripe
};