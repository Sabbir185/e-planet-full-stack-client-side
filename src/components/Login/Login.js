import React, { useContext } from 'react';
import Header from './../Header/Header';
import { useForm } from "react-hook-form";
import googleIcon from '../images/Group 573.png'
import './Login.css'
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.configs';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }else {
    firebase.app();
    }


const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const {displayName, email, photoURL} = result.user;
            const googleUserInfo = {name: displayName, email, photoURL};
            setLoggedInUser(googleUserInfo)
            history.replace(from)
        }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
        });
    }

    const onSubmit = data => {

    }


    return (
        <div className='container'>
            <Header></Header>

            <div className="row">
                <div className="col"></div>
                <div className="col-sm-8 col-md-8 col-lg-4 col-xlg-4 form-container">
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>Create an account</h5>
                        <input name="name" ref={register({ required: true })} placeholder='Name' className='form-control mt-4'/>
                        {errors.name && <span className='text-danger'>Name is required</span>}
                        <br/>

                        <input name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeholder='UserName or Email' className='form-control'/>
                        {errors.email && <span className='text-danger'>Email is required</span>}
                        <br/>

                        <input type='password' name="password" ref={register({ required: true, min: 6, pattern: /\d{1}/ })} placeholder='Password' className='form-control'/>
                        {errors.password && <span className='text-danger'>Password is required</span>}
                        <small><em style={{color:'gray', padding:'5px'}}>Minmun length 6 with character and number</em></small>
                        <br/><br/>

                        <input type='password' name="confirmPassword" ref={register({ required: true, min: 6, pattern: /\d{1}/ })} placeholder='Confirm Password' className='form-control'/>
                        {errors.confirmPassword && <span className='text-danger'>Confirm Password is required</span>}
                        <small><em style={{color:'gray', padding:'5px'}}>Minmun length 6 with character and number</em></small>
                        <br/><br/>
                        
                        <input type="submit" value='Create an account' className='btn btn-success w-100'/>
                    </form>
                </div>
                <div className="col"></div>
            </div>

            <div>
                <div className='row'>
                    <div className="col-3"></div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 mb-5">
                        <p className='text-center mt-3'>--------------- or ---------------</p>
                        <div onClick={handleGoogleSignIn} className="google-sign w-75"><img src={googleIcon} alt=""/> Continue with Google</div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>


        </div>
    );
};

export default Login;