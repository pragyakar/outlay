import firebase from 'firebase/app';
import 'firebase/firestore';
import Env from '../env';

var firebaseConfig = {
  apiKey: Env.firebaseApiKey,
  authDomain: Env.firebaseAuthDomain,
  databaseURL: Env.firebaseDatabaseUrl,
  projectId: `${Env.firebaseProjectId}`,
  storageBucket: Env.firebaseStorageBucket,
  messagingSenderId: Env.firebaseMessageSenderId,
  appId: Env.firebaseAppId
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;