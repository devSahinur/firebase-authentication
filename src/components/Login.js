import React, { isValidElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import rocket from '../images/rocket.svg'
import desk from '../images/desk.svg'
import './Login.css'
import firebaseConfig from '../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";


firebase.initializeApp(firebaseConfig)



const Login = () => {
    const [mode, setMode] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    })


    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(GoogleProvider)
        .then(res => {
            console.log(res.user);
        })
    }

    // Number Password Email valid
    const handelBlur = (e) => {
            let isFromValid = true;
        if(e.target.name === 'email'){
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            isFromValid = isPasswordValid;
        }
        if(isFromValid){
            
            console.log(e.target.name ,e.target.value)
        }
            
    }

    const handleSignInSubmit = (e) =>{
        e.preventDefault();
        console.log('submit done')
    }



    const signUpBtnHandle = () => {
        setMode('sign-up-mode')
    }
    
    const signINBtnHandle = () =>{
        setMode('')
    }

    return (
        <div className={`container ${mode}`}>
            <div className="forms-container">
                <div className="signin-signup">
                <form onSubmit={handleSignInSubmit} className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <p>Email:{user.email}</p>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" name='email' placeholder="Email" onChange={handelBlur} required />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" name='password' placeholder="Password" onChange={handelBlur} required />
                    </div>
                    <input type="submit" value="Login" className="btn solid" />
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media">
                    <a onClick={handleSignIn} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faGithub} /> 
                    </a>
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    </div>
                </form>
                <form action="#" className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Name" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" className="btn" value="Sign up" />
                    <p className="social-text">Or Sign up with social platforms</p>
                    <div className="social-media">
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faGithub} /> 
                    </a>
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="social-icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    </div>
                </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>New here ?</h3>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                    ex ratione. Aliquid!
                    </p>
                    <button onClick={signUpBtnHandle} className="btn transparent" id="sign-up-btn">
                    Sign up
                    </button>
                </div>
                <img src={rocket} className="image" alt="" />
                </div>
                <div className="panel right-panel">
                <div className="content">
                    <h3>One of us ?</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    laboriosam ad deleniti.
                    </p>
                    <button onClick={signINBtnHandle}  className="btn transparent" id="sign-in-btn">
                    Sign in
                    </button>
                </div>
                <img src={desk} className="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;