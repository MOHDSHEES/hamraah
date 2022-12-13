import React, { useEffect, useLayoutEffect } from "react";

import Carousal from "./carousal";
import Counter from "./counter";
import Footer from "./footer";
import Navbar from "./navbar";
import Quote from "./quote";
import Sectionabout from "./sectionabout";
import VideoSection from "./videoSection";
import Aboutsec from "./aboutsec";
import Gallery2 from "./gallery";
import Faq from "./faq";
import Careers from "./careers";
import Volunteers from "./volunteers";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import Donation from "./Donatelegacy";
import Contact from "./contactus";
import Volunteer from "./volunteer";
import Parternship from "./parternship";
import Certification from "./certification";
import ECOSOS from "./ECOSOS";
import Education from "./education";
import Envirement from "./envirement";
import Healthsec from "./Healthsec";
import Humanright from "./humanright";
import Skilldevolpment from "./skilldevolpment";
import Womenempowerment from "./Womenempowerment";
import Tour from "./tour";
import Modalpledge from "./modalpledge";
import Walkingregistration from "./Walkingregistration";
import Modal from "./modal";
import Privacy from "./privacy";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  useLayoutEffect(() => {
    if (!sessionStorage.getItem("flag")) {
      setTimeout(() => {
        window.$("#Modal1").modal("show");
      }, 15000);
    }
    sessionStorage.setItem("flag", 1);
  }, []);

  return (
    <div>
      <BrowserRouter basename='/'>
        <ScrollToTop />
        <Navbar />
        <Modalpledge />
        <Modal />

        <Switch>
          <Route exact path="/">
            <VideoSection />
            <Carousal />
            <Sectionabout />
            <Counter />
            <Quote />
          </Route>

          <Route exact path="/healthsec">
            <Healthsec />
          </Route>
          <Route exact path="/humanright">
            <Humanright />
          </Route>
          <Route exact path="/skilldevolpment">
            <Skilldevolpment />
          </Route>
          <Route exact path="/womenempowerment">
            <Womenempowerment />
          </Route>

          <Route exact path="/about">
            <Aboutsec />
          </Route>
          <Route exact path="/donation">
            <Donation />
          </Route>
          <Route exact path="/volunteer">
            <Volunteer />
          </Route>
          <Route exact path="/gallery">
            <Gallery2 />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/volunteers">
            <Volunteers />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
          <Route exact path="/parternships">
            <Parternship />
          </Route>
          <Route exact path="/certification">
            <Certification />
          </Route>
          <Route exact path="/ECOSOS">
            <ECOSOS />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/envirement">
            <Envirement />
          </Route>
          <Route exact path="/tour">
            <Tour />
          </Route>
          <Route exact path="/walkingtour">
            <Walkingregistration />
          </Route>
          <Route exact path="/careers">
            <Careers />
          </Route>

          <Route path="/404">
            <div
              style={{ padding: "25px 30px ", fontWeight: "600" }}
              className="alert alert-danger"
              role="alert"
            >
              <h4>404! Not Found</h4>
            </div>
          </Route>
          <Redirect to="/404" />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
