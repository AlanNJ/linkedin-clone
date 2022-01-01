import { initializeApp } from "firebase/app";
import { useDebugValue } from "react";
import firebase from "firebase/compat";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: `${process.env.REACT_APP_API_KEY}`,
	authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
	projectId: `${process.env.REACT_APP_PROJECT_ID}`,
	storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
	messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
	appId: `${process.env.REACT_APP_APP_ID}`,
	measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
db.settings({ ignoreUndefinedProperties: true });
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
