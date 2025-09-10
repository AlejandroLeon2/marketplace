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
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error("Error signing in with Google", err);
    }
};

//funcion de registro en firebase
export const signUpWithEmail= async (email: string, pass: string) => {
    try {
        const resCredential = await createUserWithEmailAndPassword(auth, email, pass);
        const user = resCredential.user;
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            displayName: user.email?.split("@")[0],
            createdAt: new Date(),
        });
    } catch (err) {
        console.error("Error registering user", err);
        alert("Error registering user");
    }
};

//funcion de login con Email
export const signInWithEmail= async (email: string, pass: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, pass);
    } catch (err) {
        console.error("Error logging in user", err);
        alert("Error logging in user");
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
