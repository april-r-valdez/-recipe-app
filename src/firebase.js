import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.end.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.end.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.end.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.end.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.end.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.end.REACT_APP_FIREBASE_APP_ID
  };

  
  const firebase = initializeApp(firebaseConfig);

  export default firebase;

