import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import img from './img/profile.jpg'
import './UserProfile.css'
import { UserContext } from '../../App';

const UserProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    document.title = "Profile";
    console.log(loggedInUser);
    return (
        <div className="containers">
        <div className="cards">
            <div className="headers">
                <div className="hamburger-menus">
                    <div className="centers"></div>
                </div>
                <a href="#" className="mails">
                     <FontAwesomeIcon icon={faSignOutAlt} />
                </a>
                <div className="mains">
                    <div style={{background: `url(${loggedInUser}) no-repeat center / cover`}} className="images">
                        <img className="profile-imag" src={loggedInUser.photo} alt="" />
                    </div>
                    <h3 className="names">{loggedInUser.name}</h3>
                    <h3 className="sub-names">{loggedInUser.email}</h3>
                </div>
            </div>

            <div className="contents">
                <div className="lefts">
                    <div className="about-containers">
                        <h3 className="titles">About</h3>
                        <p className="texts">Lorem Ipsum is simply text of the printing and types industry.</p>
                    </div>
                    <div className="icons-containers">
                        <a href="#" className="icons">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="icons">
                             <FontAwesomeIcon icon={faGithub} />  
                        </a>
                        <a href="#" className="icons">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="icons">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                    <div className="buttons-wraps">
                        <div className="follow-wraps">
                            <a href="#" className="follows">Follow</a>
                        </div>
                        <div className="share-wraps">
                            <a href="#" className="shares">Share</a>
                        </div>
                    </div>
                </div>

                <div className="rights">
                    <div>
                        <h3 className="numbers">91</h3>
                        <h3 className="number-titles">Posts</h3>
                    </div>
                    <div>
                        <h3 className="numbers">2.4K</h3>
                        <h3 className="number-titles">Following</h3>
                    </div>
                    <div>
                        <h3 className="numbers">4.7K</h3>
                        <h3 className="number-titles">Followers</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UserProfile;