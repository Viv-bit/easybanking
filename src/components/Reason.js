import React from "react";
import OnlineBanking from "../assets/images/icon-online.svg";
import Budgeting from "../assets/images/icon-budgeting.svg";
import Onboarding from "../assets/images/icon-onboarding.svg";
import OpenApi from "../assets/images/icon-api.svg";

export default function Reason() {
    return (
        <div className="container reason-section">
            <h2>Why choose Easybank?</h2>

            <p>We leverage open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>

            <div className="reasons">
                <span className="reason">
                    <img alt="banking icon" src={OnlineBanking} />
                    <h4>Online Banking</h4>
                    <p>Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.</p>
                </span>

                <span className="reason">
                    <img alt="budgeting icon" src={Budgeting} />
                    <h4>Simple Budgeting</h4>
                    <p>See exactly where your money goes each month. Receive notification when you are close to hitting your limits.</p>
                </span>

                <span className="reason">
                    <img alt="onboarding icon" src={Onboarding} />
                    <h4>Fast Onboarding</h4>
                    <p>We don't do branches, open your account in minutes online and start taking control of your finances right away.</p>
                </span>

                <span className="reason">
                    <img alt="open api icon" src={OpenApi} />
                    <h4>Open API</h4>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </span>
            </div>
        </div>
    )
}