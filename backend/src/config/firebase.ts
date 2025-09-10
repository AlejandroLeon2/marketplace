import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import serviceAccount from '../../serviceAccountKey.json' with {type:'json'};
admin.initializeApp({
    credential:admin.credential.cert(serviceAccount as admin.ServiceAccount),

});
admin.firestore().settings({ ignoreUndefinedProperties: true });
export const auth = getAuth();
export const db = admin.firestore();