import firebase from 'firebase/app';
import 'firebase/firestore';
import Env from '../env';

const firebaseConfig = {
  apiKey: Env.firebaseApiKey,
  authDomain: Env.firebaseAuthDomain,
  databaseURL: Env.firebaseDatabaseUrl,
  projectId: `${Env.firebaseProjectId}`,
  storageBucket: Env.firebaseStorageBucket,
  messagingSenderId: Env.firebaseMessageSenderId,
  appId: Env.firebaseAppId
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();

export default firebase;