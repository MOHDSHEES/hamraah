import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer class="footer section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="footer-widget widget">
              <h4 class="text-capitalize mb-4 text-white">
                Hamraah Foundation{" "}
              </h4>
              <p>
                Hamraah Foundation is a non-government organization,
                which aim's to ensure quality education, access to information,
                equal & equitable opportunity for sustainable employment and
                lifelong learning for all.
              </p>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="widget footer-widget">
              <h4 class="text-capitalize mb-4 text-white">Quick Links</h4>

              <ul class="list-unstyled footer-menu lh-35">
                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/volunteer">Volunteer</Link>
                </li>
                <li>
                  <Link to="/faq">Faq's</Link>
                </li>
                <li>
                  <Link to="/contact">Contact </Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="footer-widget widget">
              <h4 class="text-capitalize mb-4 text-white"> Contact </h4>
              <p>
                2426/X Shah Abul Khair Marg,Turkman <br />
                Gate,Delhi-110006,INDIA.
              </p>

              <ul class="list-unstyled footer-menu mt-4">
                <li>
                <a href="tel:+91 9315114388">
                    <i class="icofont-phone"></i><span>+91 9315114388</span>
                  </a>
                </li>
                <li>
                <a href="mailto:support@gmail.com">
                    <i class="icofont-email"></i><span>info.hamraah@gmail.com</span>
                  </a>
                </li>
              </ul>
              <ul class="list-inline footer-socials">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/hamraahfoundation/">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://twitter.com/Hamraahfdn">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.instagram.com/hamraah.foundation/">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.youtube.com/channel/UCiEpHjz0XH1Qf6Lx5gdtwwQ">
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="http://in.linkedin.com/pub/hamraah-foundation/60/568/490">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 gallery-width ">
            <div class="widget footer-widget">
              <h4 class="text-capitalize mb-4 text-white">Gallery</h4>
              <Link to = "/gallery" >
              <div class="gallery-wrap">
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/gallry1.jpg"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/gallry2.jpg"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/gallry3.jpg"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/gallry4.jpg"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/nim.jpg"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/gallry6.png"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/Ecososimg4.jpeg"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/gallry5.jpg"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
                <div class="gallery-img">
                  <img
                    src={process.env.PUBLIC_URL + "/ecososimg2.jpeg"}
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div class="footer-btm py-4">
          
            
              <div class="copyright">
                 HAMRAAH FOUNDATION IS AN NGO IN SPECIAL CONSULTATIVE STATUS WITH ECONOMIC AND SOCIAL COUNCIL OF UNITED NATIONS
                 <div class="row justify-content-center">
Copyright © 2021 Hamraah Foundation, All Rights Reserved.
                
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
