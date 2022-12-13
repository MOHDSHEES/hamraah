/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function ECOSOS() {
  return (
    <div>
      <div className="donation-container">
        <div className="donation-heading"> ECOSOC, UNITED NATIONS</div>
        <div className="donation-content boxshadow">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100  crousal1-img"
                  src="Ecososimg1.jpeg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src="ecososimg2.jpeg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src="ecososimg5.jpeg"
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src="ecososimg3.jpeg"
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src="ecososimg6.jpeg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <br />
          Hamraah Foundation (HF) is an Ngo in Special Consultative Status with
          Economic and Social Council (ECOSOC) of United Nations since 2018. HF
          actively engages with ECOSOC and its subsidiary bodies, as well as
          with the United Nations Secretariat, programmes, funds and agencies
          by: · Requesting the Secretary-General, through the Committee on
          Non-Governmental Organizations, to place items of special interest in
          the provisional agenda of the Council. · Attending meetings at United
          Nations. · Designating official representatives to the United Nations
          Headquarters in New York and the United Nations offices in Geneva and
          Vienna.
          <br />


          
          <div className="donation-btns">
            <a
              href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
              target="_blank"
              type="button"
              className="btn btn btn-main help-btn"
            >
              Donate Now
            </a>

            <button type="button" className="btn btn-main help-btn">
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ECOSOS;
