import React from 'react';
import img from './img/profile.jpg'
import './UserProfile.css'

const UserProfile = () => {
    return (
        <div className="containers">
        <div className="cards">
            <div className="headers">
                <div className="hamburger-menus">
                    <div className="centers"></div>
                </div>
                <a href="#" className="mails">
                    <i className="far fa-envelope"></i>
                </a>
                <div className="mains">
                    <div style={{background: `url(${img}) no-repeat center / cover`}} className="images">
                        <div className="hovers">
                            <i className="fas fa-camera fa-2x"></i>
                        </div>
                    </div>
                    <h3 className="names">John Doe</h3>
                    <h3 className="sub-names">@J_Doe</h3>
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
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="icons">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="icons">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                        <a href="#" className="icons">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div className="buttons-wraps">
                        <div className="follow-wraps">
                            <a href="#" className="follows">Follow</a>
                        </div>
                        <div className="share-wrap">
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