import React from "react";
import { Link } from "react-router-dom";
import Volunteers from "./volunteers";
function Aboutsec() {
  return (
    <div>
      <section class="page-title bg-1">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="block text-center">
                <span class="text-white">who we are</span>
                <h1 class="text-capitalize mb-4 text-lg">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section about-page">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="about-item-img">
                <img src="aboutUs-2.jpeg" alt="" class="img-fluid w-100" />
              </div>
            </div>

            <div class="col-lg-8">
              <div class="about-item-content pl-4">
                <h2 class="mb-4 content-title">
                  {" "}
                  Welcome to Hamraah Foundation Non-Government Organization
                </h2>
                <p class="lead" style={{ color: "black" }}>
                  Hamraah Foundation is a non-government organization,
                  registered under society registration Act 1860. The Foundation
                  was started in 2003 by the like minded individual with an aim
                  to ensure quality education, access to information, equal &
                  equitable opportunity for sustainable employment and lifelong
                  learning for all. The Foundation believes that every
                  individual in the society deserves a life with dignity and
                  free from any kind of discrimination and oppression.
                </p>
                <p class="mb-4" style={{ color: "black" }}>
                  The Foundation is also registered under 12A, 80G, Foreign
                  Contribution (Regulation) Act (FCRA) and NITI Aayog,
                  Government of India. The Society has been recognized as having
                  Special Consultative Status with the Economic and Social
                  Council, NGO Branch of United Nations since 2018.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="section pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="content text-center">
                <h2 class="content-title mb-4">Worldwide partners</h2>
                Hamraah Foundation has aligned with national as well as
                international Human Rights values to leverage high level
                mandates with regards to peace, justice, liberty, equality and
                life with dignity.
              </div>
            </div>
          </div>

          <div class="clients-item-wrap mt-5">
            <div class="d-flex justify-content-center align-items-center  row">
              <div class="col-lg-3 col-md-6 fund-img ">
                <img src="/funding-agency/img10.png" alt="" class="img-fluid " />
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/imgimesa.jpeg" alt="" class="img-fluid " />
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/img3.jpg" alt="" class="img-fluid " />
              </div>

              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/img4.jpg" alt="" class="img-fluid " />
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/img5.jpg" alt="" class="img-fluid " />
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/img6.jpg" alt="" class="img-fluid " />
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/img9.png" alt="" class="img-fluid " />
                {/* <figcaption class="img-caption">Visit ORG</figcaption> */}
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/img8.jpg" alt="" class="img-fluid " />
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/amp.jpeg" alt="" class="img-fluid " />
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/img7.jpg" alt="" class="img-fluid " />
                <figcaption class="img-caption">
                  Members and Non-members
                </figcaption>
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img
                  src="/funding-agency/img1.jpg"
                  alt=""
                  class="img-fluid "
                />
              </div>
              <div class="col-lg-3 col-md-6 fund-img">
                <img src="/funding-agency/img2.png" alt="" class="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section feature pb-0">
        <div class="container ">
          <div class="row no-gutters boxshadow">
            <div class="col-lg-4 col-md-6 ">
              <div class="feature-inner">
                <i class="icofont-home"></i>
                <h4>Founded in 2003</h4>
                <p>Work Since 2003 with Pride!!</p>
                <p>
                  Cum voluptas tenetur, voluptatibus mollitia odio sint, alias
                  debitis quasi ut commodo consequat.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature-inner">
                <i class="icofont-web"></i>
                <h4>Our History</h4>
                <p>Mission to make smile the world</p>
                <p>
                  Cum voluptas tenetur, voluptatibus mollitia odio sint, alias
                  debitis quasi ut commodo consequat.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature-inner">
                <i class="icofont-users"></i>
                <h4>Large Community</h4>
                <p>Join our community & help others</p>
                <p>
                  Cum voluptas tenetur, voluptatibus mollitia odio sint, alias
                  debitis quasi ut commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  Section Services Start --> */}
      {/*
      <section class="section team">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 text-center">
              <div class="section-title">
                <h2 class="mt-3 content-title">Volunteers</h2>
              </div>
            </div>
          </div>

          <div class="row justify-content-center volpic2">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team-item-wrap mb-5 volpic">
                <div class="team-item position-relative">
                  <img
                    src="minal.jpeg"
                    alt=""
                    class="img-fluid w-100"
                  />
                </div>
                <div class="team-item-content">
                  <h4 class="mt-3 mb-0 text-capitalize">Justin hammer</h4>
                  <p class="pv">Founder</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team-item-wrap mb-5 volpic">
                <div class="team-item position-relative">
                  <img
                    src="profile-sample.png"
                    alt=""
                    class="img-fluid w-100"
                  />
                </div>
                <div class="team-item-content">
                  <h4 class="mt-3 mb-0 text-capitalize">Jason roy</h4>
                  <p class="pv">Co-Founder</p>
                </div>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="team-item-wrap mb-5 volpic">
                <div class="team-item position-relative">
                  <img
                    src="profile-sample.png"
                    alt=""
                    class="img-fluid w-100"
                  />
                </div>
                <div class="team-item-content">
                  <h4 class="mt-3 mb-0 text-capitalize">Henry oswald</h4>
                  <p class="pv">Volunteer</p>
                </div>
              </div>
            </div>
          </div>




          

          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <Link to="/volunteer" class="btn btn-main rounded">
                  Become a volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* <!--  Section Services End --> */}
      

      <div>
        <Volunteers />
      </div>




      <div class="cta-block section">
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-7 col-md-12">
              <div class="cta-content text-center">
                <i class="icofont-diamond text-lg text-color"></i>
                <h2 class="text-white text-lg mb-5 mt-3">
                  We can’t help everyone, but everyone can help someone
                </h2>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a
                  href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
                  class="btn btn-main rounded"
                  target="_blank"
                >
                  Make a donation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section gallery">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="section-title text-center">
                <span class="text-color">Our Gallery</span>
                <h2 class="mt-3 mb-4 position-relative content-title">
                  We connect with people across different sectors. We take
                  risks and We always keep learning.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="gallery-wrap">
            <div class="row">
              <div class="col-lg-4">
                <div class="gallery-item">
                  <a href="gallry1.jpg" target="_blank" class="gallery-popup">
                    <img src="gallry1.jpg" alt="" class="img-fluid w-100" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="gallery-item">
                  <a href="gallry2.jpg" target="_blank" class="gallery-popup">
                    <img src="gallry2.jpg" alt="" class="img-fluid w-100" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="gallery-item">
                  <a href="gallry3.jpg" target="_blank" class="gallery-popup">
                    <img src="gallry3.jpg" alt="" class="img-fluid w-100" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="gallery-item">
                  <a href="gallry4.jpg" target="_blank" class="gallery-popup">
                    <img src="gallry4.jpg" alt="" class="img-fluid w-100" />
                  </a>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="gallery-item">
                  <a href="gallry5.jpg" target="_blank" class="gallery-popup">
                    <img src="gallry5.jpg" alt="" class="img-fluid w-100" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="gallery-item">
                  <a href="gallry6.png" target="_blank" class="gallery-popup">
                    <img src="gallry6.png" alt="" class="img-fluid w-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-divider"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Aboutsec;
