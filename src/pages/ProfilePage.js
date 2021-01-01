import React from "react";
import "../static/css/ProfilePage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <div id="main">
        <div class="sidebar-container">
          <div class="sidebar-header">
            <div class="sidebar-header-profile-pic">
              <img
                src="https://cdn.vox-cdn.com/thumbor/oNnnCHyvQQJiN2UZ0kxN7M5tgnE=/0x0:436x512/920x613/filters:focal(184x222:252x290):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63789762/Viacom_Nickelodeon_On_Newm.0.jpg"
                class="sidebar-header-profile-pic-img"
              />
            </div>
            <div class="sidebar-header-section-name">My Profile</div>
            <div class="sidebar-header-shop-icon"></div>
            <div class="clr"></div>
          </div>
          <div class="sidebar-options-container">
            <a class="sidebar-options" href="#">
              Matches
            </a>
            <a class="sidebar-options" href="#">
              Messages
            </a>
          </div>
          <div class="sidebar-user-cards">
            <ul class="individual-cards-list">
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
              <li class="individual-card">
                <img
                  src="http://worldwideinterweb.com/wp-content/uploads/2016/07/dating-meme-funny.jpg"
                  class="individual-card-content"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="main-container">
          <div class="main-card-container">
            <img
              src="https://pyxis.nymag.com/v1/imgs/7aa/21a/c1de2c521f1519c6933fcf0d08e0a26fef-27-spongebob-squarepants.rsquare.w700.jpg"
              class="main-card-image"
            />
            <div class="main-card-toggle">
              <div class="main-card-toggle-tracker"></div>
              <div class="main-card-toggle-tracker"></div>
              <div class="main-card-toggle-tracker"></div>
              <div class="main-card-toggle-tracker"></div>
            </div>
            <div class="main-card-info">
              <div class="name-age-info">
                <h3 class="main-card-name">Spongebob</h3>
                <p class="main-card-age">23</p>
              </div>
              <div class="affiliation-location-info">
                <p class="affiliation-info">
                  Mrs. Puff's Boating School
                </p>
                <p class="location-info">10 miles away</p>
              </div>
            </div>
            <i class="fas fa-info-circle main-card-moreInfo-icon"></i>
            <div class="main-card-side-arrows">
              <a class="main-card-arrow" style={{ left: 0 }} href="#">
                &#60;
              </a>
              <a
                class="main-card-arrow"
                style={{ right: 0 }}
                href="#"
              >
                &#62;
              </a>
            </div>
          </div>
          <div class="reaction-buttons-container">
            <div class="react-button-container">
              <img
                class="react-button-image"
                src="https://cdn.onlinewebfonts.com/svg/img_476666.png"
                href="#"
              />
            </div>
            <div class="react-button-container">
              <img
                class="react-button-image"
                src="https://toppng.com/uploads/preview/red-x-red-x-11563060665ltfumg5kvi.png"
                href="#"
              />
            </div>
            <div class="react-button-container">
              <img
                class="react-button-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Breezeicons-emblems-16-rating.svg/512px-Breezeicons-emblems-16-rating.svg.png"
                href="#"
              />
            </div>
            <div class="react-button-container">
              <img
                class="react-button-image"
                src="https://cpng.pikpng.com/pngl/s/590-5903480_red-heart-with-ochre-outline-clip-art-love.png"
                href="#"
              />
            </div>
            <div class="react-button-container">
              <img
                class="react-button-image"
                src="https://toppng.com/uploads/preview/purple-lightning-bolt-11549723321buuqxyxwkp.png"
                href="#"
              />
            </div>
          </div>
          <div class="keyboard-reactions-container">
            <a class="hide-icon" href="#">
              HIDE
            </a>
            <div class="key-icon">
              <kbd style={{ marginRight: "1em" }}>&#60;</kbd>
              NOPE
            </div>
            <div class="key-icon">
              <kbd style={{ marginRight: "1em" }}>&#62;</kbd>
              LIKE
            </div>
            <div class="key-icon">
              <kbd style={{ marginRight: "1em" }}>&#8593;</kbd>
              OPEN PROFILE
            </div>
            <div class="key-icon">
              <kbd style={{ marginRight: "1em" }}>&#8595;</kbd>
              CLOSE PROFILE
            </div>
            <div class="key-icon">
              <kbd style={{ marginRight: "1em" }}>ENTER</kbd>
              SUPER LIKE
            </div>
            <div class="key-icon">
              <kbd style={{ marginRight: "1em" }}>SPACEBAR</kbd>
              NEXT PHOTO
            </div>
          </div>
        </div>
        <div class="clr"></div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default ProfilePage;
