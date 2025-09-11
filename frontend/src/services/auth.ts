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
    console.log(result);
    const user = result.user;

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.email?.split("@")[0],
      photoURL: user.photoURL || "",
      createdAt: new Date().toISOString()
    };
    await setDoc(doc(db, "users", user.uid), userData, { merge: true });
    alert(userData);

  } catch (err) {
    console.error("Error signing in with Google", err);
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

  return await res.json(); // { uid, ... }
};


//funcion de login con Email
export const signInWithEmail= async (email: string, pass: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, pass);
     } catch (err: any) {
  console.error("Error logging in user", err);
  alert(err.message); // muestra el mensaje real del error
}
};

//funcion de logout
export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.error("Error logging out user", err);
        alert("Error logging out user");
    }
};
