import { auth, db } from "../config/firebase.js";
import { UserDTO } from "../dtos/UserDTO.js";
import { stripe } from "../config/stripe.js";

// Crear usuario en Firebase + Stripe
export const createUser = async (
  email: string,
  password: string,
  displayName: string
): Promise<UserDTO> => {
  const user = await auth.createUser({ email, password });

  // Crear cliente en Stripe
  const customer = await stripe.customers.create({
    email,
    name: displayName,
  });

  // Construir objeto UserDTO
  const userData: UserDTO = {
    uid: user.uid,
    email: user.email || "",
    displayName,
    createdAt: new Date(),
    stripeCustomerId: customer.id, // 🔑 guardamos el id del cliente en Stripe
  };

  await db.collection("users").doc(user.uid).set(userData);

  return userData;
};

export const getUserById = async (uid: string) => {
  const doc = await db.collection("users").doc(uid).get();
  return doc.exists ? doc.data() : null;
};

export const createGoogleUser = async (
  uid: string,
  email: string,
  displayName: string,
  photoURL?: string
): Promise<UserDTO> => {
  const userRef = db.collection("users").doc(uid);
  const userSnap = await userRef.get();

  if (userSnap.exists) {
 
    return userSnap.data() as UserDTO;
  }

  const userData: UserDTO = {
    uid,
    email,
    displayName,
    photoURL,
    createdAt: new Date(),
  };

  await userRef.set(userData);
  return userData;
};

