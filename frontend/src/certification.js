import React from "react";

function certification() {
  return (
    <div>
      <div className="donation-container">
        <div className="donation-heading">Certifications</div>
        <div className="donation-content boxshadow">
          <div className="certificate-container">
            <div className="certificate border boxshadowlite ">
              <div className="certificate-img  ">
                <a href="certificate/80G.jpg" target="_blank">
                  <img src="certificate/80G.jpg" alt="certificate" />
                </a>
              </div>
              <p style={{ color: "#005e6e", fontWeight: "600" }}>
                80G-Certificate
              </p>
            </div>
            <div className="certificate border boxshadowlite">
              <a href="certificate/NITI-Ayog.jpeg" target="_blank">
                <div className="certificate-img  ">
                  <img src="certificate/NITI-Ayog.jpeg" alt="certificate" />
                </div>
                <p style={{ color: "#005e6e", fontWeight: "600" }}>NITI AYOG REGISTRATION</p>
              </a>
            </div>
            <div className="certificate border boxshadowlite">
              <a href="certificate/12A.jpg" target="_blank">
                <div className="certificate-img">
                  <img src="certificate/12A.jpg" alt="certificate" />
                </div>
                <p style={{ color: "#005e6e", fontWeight: "600" }}>
                  12A Certificate
                </p>
              </a>
            </div>
            <div className="certificate border boxshadowlite">
              <a href="certificate/Societyreg.jpg" target="_blank">
                <div className="certificate-img">
                  <img src="certificate/Societyreg.jpg" alt="certificate" />
                </div>
                <p style={{ color: "#005e6e", fontWeight: "600" }}>
                  {" "}
                  Society registration{" "}
                </p>
              </a>
            </div>
            <div className="certificate border boxshadowlite">
              <a href="certificate/CSR.jpg" target="_blank">
                <div className="certificate-img">
                  <img src="certificate/CSR.jpg" alt="certificate" />
                </div>
                <p style={{ color: "#005e6e", fontWeight: "600" }}>CSR</p>
              </a>
            </div>

            <div className="certificate border boxshadowlite">
              <a href="certificate/certificate3.pdf" target="_blank">
                <div className="certificate-img">
                  <img src="certificate/certificateimg.png" alt="certificate" />
                </div>
                <p style={{ color: "#005e6e", fontWeight: "600" }}> Special Consultative
Status with the
Economic and Social
Council,NGO Branch,
UNITED NATIONS since 2018 </p>
              </a>
            </div>
            <div className="certificate border boxshadowlite">
              <div className="certificate-img">
                <img src="" alt="" />
              </div>
              <p style={{ color: "#005e6e", fontWeight: "600" }}>FCRA</p>
            </div>
            <div className="certificate border boxshadowlite">
              <a href="certificate/ESDM.pdf" target="_blank">
                <div className="certificate-img">
                  <img src="certificate/esdm.png" alt="certificate" />
                </div>
                <p
                  style={{
                    marginTop: "5px",
                    color: "#005e6e",
                    fontWeight: "600",
                  }}
                >
                  Empanelled Training
Partner For The
Telecom Sector Skill Council
(TSSC)
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default certification;
