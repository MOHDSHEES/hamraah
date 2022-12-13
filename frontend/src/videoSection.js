/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function VideoSection() {
  return (
    <div>
      <div class="sliderr">
        <div class="hero-caption">
          <h1 class="hero-title">
            "As one person I cannot change the world, But I can change the world
            of one person."
          </h1>
          <div className="help-btn-div">
            <a
              href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
              type="button"
              target="_blank"
              className="btn btn-primary help-btn help1-btn "
              style={{width:"290px"}}
            >
              <i class="fa fa-heart" style={{ color: "red", margin: "5px"  }} />
              Yes! I want to Help!
            </a>
          </div>
        </div>
        <div className="video-container">
          <div className="vid">
            <video autoPlay muted loop>
              <source src="vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <a href="https://youtu.be/NfT6JDQVOiU" target="_blank">
            <img
              alt="HAMRAAH patch"
              class="hero-video-patch lazyloaded img-border"
              // src="border.png"
              src="border.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default VideoSection;
