import { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes , getDownloadURL } from "@firebase/storage";
import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";




const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const storage = getStorage(app);
  export const auth = getAuth();

  export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
  }
  export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
  }
  export function logout(){
    return signOut(auth);
  }
  //creating a custom hook for current user
  export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user =>{setCurrentUser(user)});
      return unsub;
    }, []);

    return currentUser;
  }

  //Storage
  export async function uploadProfile(file, currentUser, setLoading){
    const fileRef = ref(storage, 'gs://recipegenerator-db0be.appspot.com/Users/user-profiles/' + currentUser.uid + '.png');

    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    updateProfile(currentUser, {photoURL});
    
    setLoading(false);
    alert('Image Uploaded!');
  }
