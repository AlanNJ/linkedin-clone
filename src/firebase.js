import { initializeApp } from "firebase/app";
import { useDebugValue } from "react";
import firebase from "firebase/compat";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyCIvv-rodCBnftynCj3HO9wWFnTwyGLapo",
	authDomain: "linkedin-clone-18d64.firebaseapp.com",
	projectId: "linkedin-clone-18d64",
	storageBucket: "linkedin-clone-18d64.appspot.com",
	messagingSenderId: "279890073037",
	appId: "1:279890073037:web:6e0a364310e56385bce084",
	measurementId: "G-RLSH5J8YQV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
db.settings({ ignoreUndefinedProperties: true });
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
