import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import{ createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged, 
        signOut,
        updateProfile } from "firebase/auth";

const userAuthContext = createContext();
export function UserAuthContextProvider({children}) {

    const [user, setUser] = useState({});
    
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        };
      }, []);

    return (
        <userAuthContext.Provider 
            value={{user, signup, login}}>
            {children}
        </userAuthContext.Provider> );
}
//creating a custom hook for current user
export function useUserAuth(){
    return useContext(userAuthContext);
}    
    