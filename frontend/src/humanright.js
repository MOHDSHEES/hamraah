import React from "react";
import ShowMoreText from "react-show-more-text";
import { Link } from "react-router-dom";

function Humanright() {
  return (
    <div>
      <div className="donation-container">
        <div className="donation-heading"> Human Rights </div>
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
                  src="nim.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src="nim2.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100  crousal1-img "
                  src="nim3.jpg"
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
          <h3 style={{ fontWeight: "600 " }}>NINEISMINE Campaign :</h3>
          <br />
          NINEISMINE is a campaign for child rights supported by Hamraah
          Foundation. It grew out of Nelson Mandela’s call to ordinary citizens
          to keep governments accountable to fulfilling the MDGs. Children in
          India took upon themselves the task to ensure the fulfillment of Goals
          2 and 3 and 4 – all of which refer to children. Later the campaign
          grew to realize the exclusion issue of children particularly in the
          context of India, therefore incorporating a strong focus on the last
          child. The objective of this initiative (which includes children from
          schools, NGOs etc from across India) is to hold the Government
          accountable to its promise to end poverty, Social exclusion and
          discrimination-towards meeting the development goals.{" "}
          <ShowMoreText>
            {" "}
            <br /> <br />
            The campaign puts children from across the country at the center of
            advocacy efforts- speaking in one voice to enable every child to
            enjoy basic health care and quality education as their
            non-negotiable right. This participatory children’s advocacy
            initiative has been advocating for 9% of the Gross Domestic Product
            (GDP) to be committed to health and Education as promised in the
            Common Minimum Program of 2004.
            <br /> <br /> The Campaign roots itself in actualizing the spirit
            and intention of the United Nations Convention on the Rights of the
            Child (CRC). So while the campaign seems centered around every
            Child’s Right to Quality Education (Article 28), Health (Article 24)
            and their Rights against Exploitation and Exclusion (Articles 32-40)
            the campaign is particularly focused on HOW these rights are
            delivered or attained. The campaign believes that a ‘child who is a
            capable of forming his or her own views’ has ‘the right to express
            those views freely in all matters affecting the child’ and that
            views of the child be given due weight ……’. Even in ‘judicial and
            administrative proceedings affecting the child’. The campaign
            provides children to access those structures already available under
            our democratic system. The campaign has been creating platforms for
            all children to interact and dream of a better more Equal and
            Inclusive world, especially for vulnerable voices to be heard.
          </ShowMoreText>
          <div className="donation-btns">
            <a
              href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
              target="_blank"
              type="button"
              className="btn btn-main help-btn"
            >
              Donate Now
            </a>
            <button
              type="button"
              class="btn btn-main help-btn"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              Take A pledge
            </button>
            <Link
              to="/volunteer"
              type="button"
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

export default Humanright;
