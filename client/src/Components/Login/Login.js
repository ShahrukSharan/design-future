import React, { useContext } from 'react';
import './Login.css';
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/admin" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email, photoURL } = result.user;
            console.log(result.user);
            const signedInUser = {name: displayName, email, photoURL} ;
            setIsLoggedIn(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div className="login mt-5 mb-5">
            <div className="row mt-5">
                <p className="text-center">{isLoggedIn.name}</p>
                <div className="col-md-6">
                    <div className="d-flex login-button">
                        <div className="icon"><FaFacebook/></div>
                        <h3 className="facebook-login">Login With Facebook</h3>
                    </div>
                    <div onClick={handleGoogleSignIn} className="d-flex login-button mt-3 mb-5">
                        <div className="icon"><FaGoogle/></div>
                        <h3 className="google-login">Login With Google</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;