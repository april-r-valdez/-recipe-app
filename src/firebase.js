import { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp, setDoc, doc, getDoc, updateDoc} from "@firebase/firestore";
import { getStorage, ref, uploadBytes , getDownloadURL } from "@firebase/storage";
import{ getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
  onAuthStateChanged,signOut, updateProfile,  reauthenticateWithCredential,
  EmailAuthProvider } from "firebase/auth";




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
      const unsubscribe = onAuthStateChanged(auth, user =>{setCurrentUser(user)});
      return () =>{
        unsubscribe();
      };
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

// Custom hook for getting current user info
export function useUserInfo(currentUser, onUpdateUserInfo) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const userRef = doc(db, 'Users', currentUser.uid);

      const getUserInfo = async () => {
        try {
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setUserInfo(docSnap.data());
            onUpdateUserInfo(docSnap.data()); // Call the callback function
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      };
      getUserInfo();
    } else {
      // Handle the case where currentUser is undefined
      setUserInfo(null);
    }
  }, [currentUser]);

  // Function to update user information
  const updateUserInfo = async (updatedInfo) => {
    try {
      if (currentUser) {
        const userRef = doc(db, 'Users', currentUser.uid);
        await updateDoc(userRef, updatedInfo);
        // Update local state with the new information
        setUserInfo((prevInfo) => ({ ...prevInfo, ...updatedInfo }));
        onUpdateUserInfo({ ...userInfo, ...updatedInfo }); // Call the callback function
      } else {
        console.error('User is undefined. Cannot update user info.');
      }
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  return { userInfo, updateUserInfo };
  }

  export function reauthUser(currentUser, password)
  {
    // TODO(you): prompt the user to re-provide their sign-in credentials
    const credential = EmailAuthProvider.credential(currentUser.email, password);

    return reauthenticateWithCredential(currentUser, credential);

  }

  


