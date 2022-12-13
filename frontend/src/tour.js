import React from "react";
import { Link } from "react-router-dom";

function Tour() {
  return (
    <div>
      <div className="donation-container">
        <div className="donation-heading"> OLD DELHI WALKING TOUR </div>
        <div className="donation-content boxshadow">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-interval="3000"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100  crousal1-img"
                  src={process.env.PUBLIC_URL + "/tour/tour1.jpg"}
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src={process.env.PUBLIC_URL + "/tour/tour2.jpg"}
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src={process.env.PUBLIC_URL + "/tour/tour3.jpg"}
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src={process.env.PUBLIC_URL + "/tour/tour4.jpg"}
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src={process.env.PUBLIC_URL + "/tour/tour5.jpeg"}
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src={process.env.PUBLIC_URL + "/tour/tour6.jpeg"}
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
          <br />
          Enjoy an immerse experience in Old Delhi! Begin the tour by visiting
          the iconic Grand Jama Masjid. Enjoy a cup of chai specially prepared
          for you. Then walk through the markets and alleys of Old Delhi, the
          symbolic heart of metropolitan Delhi to reach Hamraah Foundation. Hear
          stories of the city and discover the history of the locations you pass
          along the way. Once you have arrived at the Foundation, participate in
          a cooking workshop! Learn to cook traditional Mughlai food, developed
          during the Mughal Empire. Experience firsthand the influence and style
          of Central Asia and North India as you enjoy the meal you’ve prepared.
          Receive a unique henna design created just for you. To end the tour,
          you can choose to be escorted to Turkman Gate or dropped directly at
          the nearest metro station, Delhi Gate/Jama Masjid by rickshaw. <br />{" "}
          <br />
          The tour starting address is a Jama Masjid Metro Station, Gate number
          2. Nearest public transport stop: New Delhi Railway Station and Delhi
          Gate Metro Station.
          <div className="donation-btns">
            {/*  eslint-disable-next-line react/jsx-no-target-blank */}
            <a
              href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
              target="_blank"
              type="button"
              className="btn btn-main help-btn"
            >
              Donate Now
            </a>

            <Link
              type="button"
              to="/volunteer"
              className="btn btn-main help-btn"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tour;
