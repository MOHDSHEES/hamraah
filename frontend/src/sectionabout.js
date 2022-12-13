import React from "react";
function Sectionabout() {
  return (
    <div className="about-container">
      <div
        class="row align-items-center about-flex"
        style={{ marginLeft: "0", marginRight: "0" }}
      >
        <div class="col-lg-6 about-title-margin">
          <div class="section-title">
            <h2 class="mt-3 content-title">
              We Believe that We can Save More Lifes with you{" "}
            </h2>
            <p>
              To provide a Platform in order to Promote Quality Education with
              main focus on overall development of children through innovative
              methods of teaching,enabling them to transform the society and
              creating a model of sustainable development in terms of
              livelihood,security,better health and safe enviroment.
            </p>
          </div>
        </div>
        <div className="about-img-div">
          <img className="about-img" src="about.jpg" alt="About" />

          <img alt="HAMRAAH patch" class="about-img-border" src="border.png" />
        </div>
      </div>
    </div>
  );
}
export default Sectionabout;
