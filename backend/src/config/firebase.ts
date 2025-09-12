import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import type {FirebaseServiceAccount} from "../types/serviceAccount.js"
import dotenv from 'dotenv';
dotenv.config();


const serviceAccount: FirebaseServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID!,
  privateKey: process.env.FIREBASE_PRIVATE_KEY!,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

admin.firestore().settings({ ignoreUndefinedProperties: true });
export const auth = getAuth();
export const db = admin.firestore();