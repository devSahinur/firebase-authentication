import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYahoo, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import rocket from '../images/rocket.svg'
import desk from '../images/desk.svg'
import './Login.css'
import firebaseConfig from '../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router';


firebase.initializeApp(firebaseConfig)
 
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
 

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    

    const [mode, setMode] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false
    });
    console.log(loggedInUser);



    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const FacebookProvider = new firebase.auth.FacebookAuthProvider();
    const GithubProvider = new firebase.auth.GithubAuthProvider();
    const YahooProvider = new firebase.auth.OAuthProvider('yahoo.com');


    const handleSignInGoogle = () =>{
        firebase.auth().signInWithPopup(GoogleProvider)
        .then(res => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL || "https://i.ibb.co/5GzXkwq/user.png"
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
    }
    const handleSignInFacebook = () =>{
        firebase.auth().signInWithPopup(FacebookProvider)
        .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL || "https://i.ibb.co/5GzXkwq/user.png"
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });
    }

    const handleSignInGithub = () => {
        firebase.auth().signInWithPopup(GithubProvider)
        .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL || "https://i.ibb.co/5GzXkwq/user.png"
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });
    }

    const handleSignInYahoo =()=>{
        firebase.auth().signInWithPopup(YahooProvider)
        .then((res) => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL || "https://i.ibb.co/5GzXkwq/user.png"
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            console.log(error)
        });
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
            const newUserInfo = {...user}
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }    
    };

    const handleSignInSubmit = (e) =>{
        e.preventDefault();
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                const newUserInfo = {...user};
                newUserInfo.error= errorMessage;
                newUserInfo.success = false;
            })
        }};



    const signUpBtnHandle = () => {
        setMode('sign-up-mode')
        document.title = "Sign Up ";
    }
    
    const signINBtnHandle = () =>{
        setMode('')
        document.title = "Login";
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
                    <a onClick={handleSignInGoogle} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a onClick={handleSignInFacebook} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a onClick={handleSignInGithub} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faGithub} /> 
                    </a>
                    <a onClick={handleSignInYahoo} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faYahoo} />
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
                    <a onClick={handleSignInGoogle} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a onClick={handleSignInFacebook} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a onClick={handleSignInGithub} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faGithub} /> 
                    </a>
                    <a onClick={handleSignInYahoo} href="#" className="social-icon">
                        <FontAwesomeIcon icon={faYahoo} />
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