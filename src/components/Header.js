import React from 'react';
import Logo from "../assets/images/logo.svg";
import Button from './Button';
import "./index.css";

export default function Header() {
    return (
        <div className="header">
            <div> <img src={Logo} alt="Easybank Logo" className="logo" /></div>

            <nav>
                <ul className="header-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>


                <Button />
            </nav>
        </div>
    )
}