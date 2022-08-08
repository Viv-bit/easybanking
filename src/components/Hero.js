import React from "react";
import Button from "./Button";
import DesktopBackgroundImage from "../assets/images/bg-intro-desktop.svg";
import PhoneImage from "../assets/images/image-mockups.png";

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-text">
                <h1>Next generation digital banking</h1>

                <p>Take you financial life online. Your EasyBank account will be your one-stop-shop for spending, saving, budgeting, investing, and much more</p>

                <Button />
            </div>

            <div className="hero-images">
                <img src={DesktopBackgroundImage} alt="Background" className="hero-background" />
                <img src={PhoneImage} alt="Mockup" className="hero-image" />
            </div>
        </div>
    )
}