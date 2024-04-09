import { createContext } from "react";
import PropTypes from 'prop-types';
import { auth } from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const userInfo = {
        createUser,
        signInUser

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