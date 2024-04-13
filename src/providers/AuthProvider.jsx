import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // google log in with pop up
    const googleLogIn = () => {
           return signInWithPopup(auth, provider);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observe current user', currentUser)
            setUser(currentUser);
        })
        return () => {
            unSubscribe;
        }

    }, [])





    const userInfo = {
        createUser,
        signInUser,
        user,
        logOutUser,
        updateUserProfile,
        googleLogIn

    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {
                    children
                }

            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}