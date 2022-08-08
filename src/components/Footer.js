import React from "react";
import Logo from "../assets/images/logoFooter.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Youtube from "../assets/images/icon-youtube.svg";
import Twitter from "../assets/images/icon-twitter.svg"
import Button from "./Button";


export default function Footer() {
    return (
        <div className="container footer">
            <div className="footer-icons">
                <img alt="Company Logo" src={Logo} />
                <span>
                <img alt="Facebook Icon" src={Facebook} />
                <img alt="Youtube icon" src={Youtube} />
                <img alt="Twitter Icon" src={Twitter} />
                <img alt="Pinterest Icon" src={Pinterest} />
                <img alt="Instagram Icon" src={Instagram} />
                </span>
            </div>

            <ul className="footer-links">
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>

            <ul className="footer-links">
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>

            <div>
                <Button />

                <p> &copy; Easybank. All Rights Reserved</p>
                
            </div>
        </div>
    )
}