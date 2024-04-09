import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



export const AuthContext = createContext(null);
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
        logOutUser

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