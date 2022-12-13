import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter() {
  const [State, setState] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState(true);
    }
    // else setState(false);
  };

  return (
    <div className="counter-container">
      <img className="counter-img" src="counter.png" />
      
      <div class="section video ">
        <div class="container">
          <div class="row counter-align ">
            <div className="text-align-counter">
              <div class="video-content  mb-5 mb-lg-0 ">
                <h2 class="mt-3 mb-5 position-relative text-lg text-white">
                  We Make a Difference in their Life
                </h2>
              </div>
            </div>
          </div>

          <div class="counter-section">
            <div class="row counter-align">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="counter-item-2 mb-5 mb-lg-0 pt-5">
                  <span class="counter-stat count  text-color">
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <CountUp start={0} end={State ? 18 : 0} duration={5} />
                    </VisibilitySensor>
                  </span>
                  <p>Years of Experience</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="counter-item-2 mb-5 mb-lg-0 pt-5">
                  <span class="counter-stat count font-weight-bold text-color">
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <CountUp start={0} end={State ? 1460 : 0} duration={5} />
                    </VisibilitySensor>
                  </span>
                  <p>Active Volunteer</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="counter-item-2 mb-5 mb-lg-0 pt-5">
                  <span class="counter-stat count text-color">
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <CountUp start={0} end={State ? 92 : 0} duration={5} />
                    </VisibilitySensor>
                  </span>
                  <p>Availble Country</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="counter-item-2 pt-5">
                  <span class="counter-stat text-color">
                    {/* 54 */}
                    {/* <CountUp end={54} duration={5} /> */}

                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <CountUp start={0} end={State ? 54 : 0} duration={5} />
                    </VisibilitySensor>
                  </span>
                  <p>Million People Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;
