import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    type User,
} from "firebase/auth";

import {doc, setDoc} from "firebase/firestore";
import { auth, db } from "./firebase";

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    if (!user) throw new Error("No se obtuvo el usuario de Google");

    const userData = {
      uid: user.uid,
      displayName: user.displayName ?? "",
      email: user.email ?? "",
      photoURL: user.photoURL ?? "",
    };

    const response = await fetch("http://localhost:3000/api/users/registerGoogle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error al guardar usuario en el backend");
    }

    console.log("Usuario Google enviado al backend correctamente");
  } catch (err) {
    console.error("Error en el proceso de login con Google:", err);
  }
};


export const signUpWithEmail = async (email: string, password: string, displayName:string) => {
  const res = await fetch('http://localhost:3000/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password , displayName })
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Error al registrar usuario');
  }

  return await res.json(); 
};

export const signInWithEmail= async (email: string, pass: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, pass);
     } catch (err: any) {
  console.error("Error logging in user", err);
  alert(err.message);
}
};


export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.error("Error logging out user", err);
        alert("Error logging out user");
    }
};
