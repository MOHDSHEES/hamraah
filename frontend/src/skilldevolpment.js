import React from "react";
import ShowMoreText from "react-show-more-text";

function Skilldevolpment() {
  return (
    <div>
      <div className="donation-container">
        <div className="donation-heading"> Skill Development </div>
        <div className="donation-content boxshadow">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100  crousal1-img "
                  src="TSS/TSS3.jpg"
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src="TSS/TSS4.jpg"
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src="TSS/TSS5.jpg"
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
          <h3 style={{ fontWeight: "500 " }}>
            The Telecom Sector Skill Council (TSSC):
          </h3>
          {/* <br /> */}
          Hamraah Foundation is one of the proud training partners of The
          Telecom Sector Skill Council (TSSC). We provide platform to create
          opportunity for youth to get skilled through theory classes and
          practical experiential learning for better understanding of tools and
          technology for Telecom industry. This empowers students with skills
          and confidence and enhances their quality of life. Our key objective
          is to create opportunities and scope for the development of talents of
          Indian youth and to promote entrepreneurship among them. This will
          also narrow the existing gap between demand and supply of skills in
          the marketplace.
          <ShowMoreText>
            The Telecom Sector Skill Council (TSSC) is an industry led apex
            body, jointly set up by The Cellular Operators Association of India
            (COAI), Indian Cellular Association (ICA) & Telecom Centres of
            Excellence (TCOE) to ensure adequate availability of skilled
            manpower to boost growth and productivity in the Telecom Sector. It
            has been set up under the aegis of the National Skill Development
            Corporation.
            <br />
            <br /> Indian Telecom sector has emerged as one of the greatest
            economic success stories, registering a consistent overall growth
            rate of more than 35% over the past decade in terms of subscribers.
            India is the second largest & fastest growing Telecom market in the
            world with 939 million subscribers as on 31st August, 2012, with
            overall Tele-density of 77% (TRAI). Further, the annual mobile
            handset sales are expected to cross 200 million units mark this year
            and India is fast becoming a manufacturing hub for the Telecom
            infrastructure equipment.
            <br />
            <br /> With m-governance, m-commerce, m-education, m-health, online
            shopping, m-gaming, m2m communications & many such new innovations,
            Telecom is set to increasingly permeate the lives of common Indians
            in coming years. The Indian Telecom success story would continue
            with 3G/4G networks and smartphones, besides focussing on the
            under-penetrated rural markets. This dynamic sector, employs close
            to 2.8 million people directly and almost another 7 million
            indirectly, making it one of the largest employment generating
            sectors in the country. At the current rate of growth, it has the
            potential to generate almost an equal number of job opportunities
            over the next ten years. This gives rise to the need for
            organizations that would drive skill development agenda to create a
            human resource pool of the right size and quality to meet the
            evolving demands of the Telecom Industry. Join Hamraah Foundation in
            an effort to acheive a Developed Nation with world class skills.
          </ShowMoreText>
          <h3 style={{ fontWeight: "500 " }}>PMKVY Training Provider :</h3>
          {/* <br /> */}
          Skills and knowledge are the motivating forces of the financial growth
          and economic development of any country, and India is no exception. As
          India moves progressively towards becoming a global knowledge economy,
          it must meet the aspirations of youth and aim towards skilling them
          with the best possible standards. The skill development of the working
          age population is currently one of the top priorities for the country.
          This is evident by the progress India has made in recent years in this
          sector. However, till 2016 there was no comprehensive and standardised
          mechanism to assess the capability of training institutes. Such
          standardised mechanisms are followed across every Industry and are
          crucial for holistic growth of the Industry. Considering this gap,
          there was a requirement for a standardized methodology which would
          guide and assess the infrastructure and training capability of
          Training Providers and Training Centres to provide quality skill
          training. Hamraah Foundation is registered with Skill Management and
          AccReditation of Training Centres (SMART) as Training Provider (TP)
          under National Skill Development Corporation (NSDC), Ministry of Skill
          Development and Entrepreneurship (MoSDE) Government of India. Hamraah
          Foundation registers Training Centres (TC) on SMART and acts as an
          umbrella organization for its respective Training Centres.
          Accreditation of Training Centres is valid for a maximum of one year.
          Hamraah Foundation performs following roles and responsibilities:
          <div className="donation-btns">
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a
              href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
              target="_blank"
              type="button"
              className="btn btn-main help-btn"
            >
              Donate Now
            </a>

            <a
              href="/volunteer"
              type="button"
              className="btn btn-main help-btn"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skilldevolpment;
