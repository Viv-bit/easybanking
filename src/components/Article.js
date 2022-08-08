import React from "react";
import Currency from "../assets/images/image-currency.jpg";
import Restaurant from "../assets/images/image-restaurant.jpg";
import Plane  from "../assets/images/image-plane.jpg";
import Confetti from "../assets/images/image-confetti.jpg";

export default function Article() {
  return (
    <div className="container article-section">
      <h2>Latest Articles</h2>

      <div className="articles">
        <span className="article">
          <img alt="currency" src={Currency} />
          <span className="article-text">
          <p>By Claire Robinson</p>
          <h4>Receive money in any currency with no fees</h4>
          <p>The world is getting smaller and we are becoming more mobile. So why should you be forced to only receive money in a single ...</p>
          </span>
        </span>

        <span className="article">
          <img alt="Restaurant" src={Restaurant} />
          <span className="article-text">
          <p>By Wilson Hutton</p>
          <h4>Treat yourself without worrying about money</h4>
          <p>Our simple budgeting feature allows you to separate your spending and set realistic limits each month. That means you ...</p>
          </span>
        </span>

        <span className="article">
          <img alt="Plane" src={Plane} />
          <span className="article-text">
          <p>By Wilson Hutton</p>
          <h4>Take your Easybank card wherever you go</h4>
          <p>We want you to enjoy your travels. This is why we don't charge any fees on purchase while you are abroad. We'll even show you ...</p>
          </span>
        </span>

        <span className="article">
          <img alt="Confetti" src={Confetti} />
          <span className="article-text">
          <p>By Claire Robinson</p>
          <h4>Our invite-only Beta accounts are now live</h4>
          <p>After alot of hardwork by the whole team, we're excited to launch our closed beta. It is easy to request an invite through the site ...</p>
          </span>
        </span>
      </div>
    </div>
  );
}
