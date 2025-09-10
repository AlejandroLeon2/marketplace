import { auth, db } from "../config/firebase.js";
import { UserDTO } from "../dtos/UserDTO.js";

export const createUser = async (
  email: string,
  password: string
): Promise<UserDTO> => {
  const user = await auth.createUser({ email, password });

  const userData: UserDTO = {
    uid: user.uid,
    email: user.email || "",
      displayName: user.displayName ?? user.email?.split('@')[0] ?? '',
    createdAt: new Date(),
  };

  await db.collection("users").doc(user.uid).set(userData);

  return userData;
};

export const getUserById = async (uid: string) => {
  const doc = await db.collection("users").doc(uid).get();
  return doc.exists ? doc.data() : null;
};

export const saveGoogleUserService = async (uid: string): Promise<UserDTO> => {
  const userRecord = await auth.getUser(uid);

  const userData: UserDTO = {
    uid,
    email: userRecord.email || "",
    displayName:
      userRecord.displayName || userRecord.email?.split("@")[0] || "",
    photoURL: userRecord.photoURL || "",
    createdAt: new Date(),
  };

  await db.collection("users").doc(uid).set(userData, { merge: true });

  return userData;
};
