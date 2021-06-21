import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';


const PrivateRoute = ({children, ...rest}) => {
    const {isLoggedIn} = useContext(AuthContext);
    return (
        <Route {...rest} render={(props) => isLoggedIn ? children : <Redirect to="/login" />} />
    );
};

export default PrivateRoute;