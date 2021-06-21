import React from 'react';
import './Header.css';
import headerImg from '../../../images/header.svg';

const Header = () => {
    return (
        <div className="app-header">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="headerDescription">We Design Your Thoughts</h2>
                    <p className="headerParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed ipsa aspernatur ut exercitationem quaerat repellat! Accusantium tempore, consequatur quod corporis animi cumque fugiat quos, maxime dicta dolor aliquid cum?</p>
                    <button className="headerBtn">Contact Us</button>
                </div>
                <div className="col-md-6">
                    <img className="headerImage" src={headerImg} alt="headerImage"/>
                </div>
            </div>
        </div>
    );
};

export default Header;