import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
      

    const registerUser = (email, password) =>{
        setLoading(true)
 
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return () =>{
            unsubscribe()
        }
    },[])


    const logOut = () =>{
        return signOut(auth)
    }

     const data = {
        user,
        registerUser,
        loginUser,
        googleLogin,
        githubLogin,
        logOut,
        loading
        
    }

    return (
        
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
         
    );
   
};

export default AuthProvider;