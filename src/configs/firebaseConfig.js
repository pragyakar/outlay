import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyChl95trM2HU5Se5spfSWh7qW4zt2_OQ84",
  authDomain: "outlay-bd873.firebaseapp.com",
  databaseURL: "https://outlay-bd873.firebaseio.com",
  projectId: "outlay-bd873",
  storageBucket: "outlay-bd873.appspot.com",
  messagingSenderId: "89741476926",
  appId: "1:89741476926:web:bfe86031dfc0cdd3acfd6f"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;