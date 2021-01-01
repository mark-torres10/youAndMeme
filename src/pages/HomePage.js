import React from "react";
import "../static/css/HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage-container">
      <div className="main">
        <div className="background-picture-container">
          <img
            className="background-picture"
            src="https://cnet3.cbsistatic.com/img/WNBKWkB2ACfnESiDAtKQbnPYsJY=/1200x675/2020/02/05/f8e32897-4019-4165-a4fa-0497449d534a/screen-shot-2020-02-05-at-11-24-14-am.png"
          />
          {console.dir("../")}
          {}
        </div>
        <div id="navbar" className="navbar-container">
          <div className="navbar-asset">
            <a href="/">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png"
                className="tinder-logo"
              />
            </a>
          </div>
          <ul className="navbar-right-assets">
            <li className="navbar-asset">
              <span>
                <a className="language-picker" href="#">
                  ENGLISH
                </a>
              </span>
            </li>
            <li className="navbar-asset">
              <a className="login-button" href="/login">
                LOG IN
              </a>
            </li>
          </ul>
        </div>
        <div className="slogan">Swipe Right</div>
        <div>
          <a className="create-account" href="/create-account">
            Create Account
          </a>
        </div>
      </div>
      <div id="footer" className="footer">
        <div className="footer-text-container">
          <p className="footer-text">
            Here are your generic disclaimers that every website has
            to have for some reason. While I've got your attention,
            here's some more tidbits. Did you know that sharks have to
            constantly keep swimming, or else they'll drown and die?
            Did you also know that this is how every entry-level IB
            grunt feels as well?
          </p>
        </div>
        <div className="disclaimer-buttons-container">
          <a className="personalize-choices-button" href="#">
            I Accept
          </a>
          <a className="accept-button">Terribly Sorry, Will Deny</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
