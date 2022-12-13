import React from "react";
function SideScroll(element, direction, speed, distance, step) {
  var scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction === "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

function Carousal(props) {
  function left() {
    var container = document.getElementById("scroll");
    SideScroll(container, "left", 25, 290, 10);
  }
  function right() {
    var container = document.getElementById("scroll");
    SideScroll(container, "right", 25, 290, 10);
  }
  return (
    <div className="card-background">
      {/* <div className="card-background-img"> */}
      <button
        onClick={left}
        className="btn btn-light btn-left"
        id="slide-left"
        type="button"
      >
        &lt;
      </button>
      <button
        onClick={right}
        className="btn btn-light btn-right"
        id="slide-right"
        type="button"
      >
        &gt;
      </button>
      <div className="card-container" id="scroll">
        <div className="cards">
          <div className="carousal-img">
            <img
              className="card-img"
              alt=""
              src="https://image.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg"
            />
          </div>
          <div className="Carousal-heading"> EDUCATION </div>
          <div className="slider-text">
            <div className=" card-slider-text">
              Though no one can go back in time and change history, anyone can
              make a new beginning from present and transform the future”. In
              India, a large adult population is illiterate. They cannot read or
              write.
              <br />
              <br />
              <a
                href="/education"
                type="button"
                className="btn btn-main help-btn"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="carousal-img">
            <img
              className="card-img"
              alt=""
              src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-56269.jpg"
            />
          </div>
          <div className="Carousal-heading"> HEALTH</div>
          <div className="slider-text">
            <div className=" card-slider-text">
              Hamraah foundation conducts educational sessions on general health
              awareness stressing on the importance of knowledge about general
              health. A lot of people are made to take part in this awareness
              session.
              <br />
              <br />
              <a
                href=" /healthsec "
                type="button"
                className="btn btn-main help-btn"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="carousal-img">
            <img
              className="card-img"
              alt=""
              src="https://img.freepik.com/free-vector/save-planet-concept-with-people-taking-care-earth_23-2148522570.jpg?size=338&ext=jpg"
            />
          </div>
          <div className="Carousal-heading">ENVIRONMENT</div>
          <div className="slider-text">
            <div className=" card-slider-text">
              International Earth day is an annual event celebrated on the 22nd
              of April every year. Over the last few decades the condition of
              our environment has degraded drastically due to increased global
              warming, deforestation,
              <br />
              <br />
              <a
                href="/envirement"
                type="button"
                className="btn btn-main help-btn"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="carousal-img">
            <img
              className="card-img"
              alt=""
              src="https://image.freepik.com/free-vector/human-rights-day-concept-illustration_114360-3871.jpg"
            />
          </div>
          <div className="Carousal-heading"> HUMAN RIGHTS </div>
          <div className="slider-text">
            <div className=" card-slider-text">
              NINEISMINE is a campaign for child rights supported by Hamraah
              Foundation. It grew out of Nelson Mandela’s call to ordinary
              citizens to keep governments accountable to fulfilling the MDGs.{" "}
              <br /> <br />
              <a
                href="/humanright"
                type="button"
                className="btn btn-main help-btn"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="carousal-img">
            <img
              className="card-img"
              alt=""
              src="https://img.freepik.com/free-vector/businessman-with-multi-tasking-skills_1150-35822.jpg?size=626&ext=jpg"
            />
          </div>
          <div className="Carousal-heading"> SKILL DEVELOPMENT </div>
          <div className="slider-text">
            <div className=" card-slider-text">
              Hamraah Foundation is one of the proud training partners of The
              Telecom Sector Skill Council (TSSC). We provide platform to create
              opportunity for youth to get skilled through theory classes and
              practical.
              <br />
              <br />
              <a
                href="/skilldevolpment"
                type="button"
                className="btn btn-main help-btn"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="carousal-img">
            <img className="card-img" alt="" src="https://bit.ly/2VGXjKo" />
            <div className="Carousal-heading"> WOMEN EMPOWERMENT </div>
            <div className="slider-text">
              <div className=" card-slider-text">
                Women empowerment is a process of obtaining equal rights in the
                society for women but sadly women empowerment is something which
                is still not taken seriously in our country. <br /> <br />
                <a
                  href="/womenempowerment"
                  type="button"
                  className="btn btn-main
                  help-btn"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousal;
