/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //useEffect(() => {
  //  window.addEventListener("scroll", listenScroll);
  //  return () => {
  //    window.removeEventListener("scroll", listenScroll);
  //  };
  //}, []);
  //const listenScroll = (event) => {
  //if (window.scrollY < 200) {
  //document.getElementById("whatsapp-img").classList.add("what-disable");
  //} else
  //document.getElementById("whatsapp-img").classList.remove("what-disable");
  //};

  return (
    <div>
      <div id="whatsapp-img" className="whatsapp-png what-disable">
        <a href="https://wa.link/3aynhk" target="_blank">
          <img src={process.env.PUBLIC_URL + "/whatsapp.png"} alt="whatsapp" />
        </a>
      </div>
      <header class="navigation">
        <div class="header-top ">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-lg-6 col-md-4 text-center text-lg-left text-md-left">
                <div class="header-top-info">
                  <a href="tel:+91 9315114388">
                    <i class="icofont-phone mr-2"></i>
                    <span>+91 9315114388</span>
                  </a>
                  <a href="mailto:support@gmail.com">
                    <i class="icofont-email mr-2"></i>
                    <span>info.hamraah@gmail.com</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-8">
                <div class="header-top-right text-center text-lg-right text-md-right mt-3 mt-lg-0">
                  <a
                    href="https://www.facebook.com/hamraahfoundation/"
                    target="_blank"
                  >
                    <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/Hamraahfdn" target="_blank">
                    <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/hamraah.foundation/"
                    target="_blank"
                  >
                    <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCiEpHjz0XH1Qf6Lx5gdtwwQ"
                    target="_blank"
                  >
                    <i class="fa fa-youtube fa-2x" aria-hidden="true"></i>
                  </a>
                  <a
                    href="http://in.linkedin.com/pub/hamraah-foundation/60/568/490"
                    target="_blank"
                  >
                    <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
                    target="_blank"
                    class="top-btn"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navigation" id="navbar">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img
                src="https://www.hamraahfoundation.org/data/2018/02/Hamraah-Copy.gif"
                alt=""
                class="img-fluid"
              />
            </Link>

            <button
              class="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              &#9776;
              {/* <span class="navbar-toggler-icon"></span> */}
            </button>

            <div
              class="collapse navbar-collapse text-center"
              id="navbarsExample09"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    class="nav-link"
                    to="/"
                  >
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    class="nav-link"
                    to="/about"
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Programs
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown04">
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/education"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/Healthsec"
                      >
                        Health
                      </a>
                    </li>
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/envirement"
                      >
                        Environment
                      </a>
                    </li>
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/humanright"
                      >
                        Human Rights
                      </a>
                    </li>
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/skilldevolpment"
                      >
                        Skill Development
                      </a>
                    </li>
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/Womenempowerment"
                      >
                        Women Empowerment
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Get Involved
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown04">
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/donation"
                      >
                        Donate Legacy
                      </a>
                    </li>
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/careers"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/volunteer"
                      >
                        Be a Volunteer{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/parternships"
                      >
                        {" "}
                        Partnerships
                      </a>
                    </li>
                  </ul>
                </li>

                {/* </li> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown06"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Others
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown06">
                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/certification"
                      >
                        Certifications
                      </a>
                    </li>

                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/privacy"
                      >
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/tour"
                      >
                        Old Delhi walking tour
                      </a>
                    </li>

                    <li>
                      <a
                        // data-toggle="collapse"
                        // data-target=".navbar-collapse.show"
                        class="dropdown-item"
                        href="/walkingtour"
                      >
                        Register For a Walk
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    class="nav-link"
                    to="/ecosos"
                  >
                    ECOSOC UNITED NATIONS
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    class="nav-link"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
