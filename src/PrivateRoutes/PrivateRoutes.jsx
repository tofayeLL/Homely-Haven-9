import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


const PrivateRoutes = ({children}) => {
    const {user,  loading} = useContext(AuthContext);
    const location = useLocation();
  
   

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children:PropTypes.node
}