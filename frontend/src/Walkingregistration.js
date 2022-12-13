import React, { useState, useEffect } from "react";
import axios from "axios";

function Walkingregistration() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [nationality, setnationality] = useState("");
  const [people, setpeople] = useState("");
  const [date, setdate] = useState("");
  const [message, setmessage] = useState("");
  const subject = "register for walk ";
  const [response, setresponse] = useState();
  const [disable, setdisable] = useState(false);

  // popup control and form clear
  useEffect(() => {
    if (response) {
      setname("");
      setemail("");
      setmobileno("");
      setnationality("");
      setpeople("");
      setdate("");
      setmessage("");
      setdisable(false);
      document.getElementById("send-btn2").innerHTML = "Send Message";
      document.getElementById("popup2").classList.remove("alert-close");
      document.getElementsByClassName("contact-alert").innerHTML =
        response.message;
      setTimeout(() => {
        document.getElementById("popup2").classList.add("alert-close");
        // setresponse();
      }, 3000);
    }
  }, [response]);

  // form submit handler
  function submitHandler(e) {
    e.preventDefault();
    setdisable(true);
    document.getElementById("send-btn2").innerHTML = "Sending...";
    const sendMail = async () => {
      const { data } = await axios.post("/api/walkingreg/sendemail", {
        name,
        email,
        mobileno,
        nationality,
        people,
        date,
        message,

        subject,
      });
      setresponse(data);
    };
    sendMail();
  }

  return (
    <div>
      <div className="alert-container  ">
        <div
          className="contact-alert boxshadow  alert-close alert-open "
          id="popup2"
        >
          {response ? response.message : ""}
        </div>
      </div>
      <div className="donation-container">
        <div className="donation-heading">
          {" "}
          Register for a walk with Hamraah Foundation{" "}
        </div>

        <div className="certificate-container"></div>
        <div class="sellermain">
          <div class="sellerform">
            <div style={{ marginBottom: "30px" }} class="seller-account">
              {" "}
              Register for a walk{" "}
            </div>
            <div style={{ margin: "0 0 10px 5px" }}>
              Fill the form to register yourself.
            </div>
            <form onSubmit={submitHandler}>
              <div class="input-group mb-2 mr-sm-2">
                <input
                  type="text"
                  class="form-control"
                  id="inputname"
                  required
                  placeholder="Enter your Name *"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>

              <div class="form-group" style={{ marginTop: "25px" }}>
                <input
                  type="email"
                  class="form-control estrix"
                  id="inputEmail"
                  required
                  placeholder="Enter Your Email *"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div class="form-group" style={{ marginTop: "25px" }}>
                <input
                  type="tel"
                  class="form-control"
                  id="inputSubject"
                  required
                  placeholder="Phone no*"
                  value={mobileno}
                  autoComplete="off"
                  onChange={(e) => setmobileno(e.target.value)}
                />
              </div>
              <div class="form-group" style={{ marginTop: "25px" }}>
                <input
                  type="text"
                  class="form-control"
                  id="inputSubject"
                  required
                  placeholder="Nationality *"
                  value={nationality}
                  autoComplete="off"
                  onChange={(e) => setnationality(e.target.value)}
                />
              </div>
              <div class="form-group" style={{ marginTop: "25px" }}>
                <input
                  type="number"
                  class="form-control"
                  id="inputSubject"
                  required
                  placeholder="How many participants*"
                  value={people}
                  autoComplete="off"
                  onChange={(e) => setpeople(e.target.value)}
                />
              </div>
              <div class="form-group" style={{ marginTop: "25px" }}>
                <input
                  type="date"
                  class="form-control"
                  id="inputSubject"
                  required
                  placeholder="select a date * "
                  value={date}
                  autoComplete="off"
                  onChange={(e) => setdate(e.target.value)}
                />
              </div>
              <div class="form-group">
                <textarea
                  rows="8"
                  class="form-control"
                  id="inputMessage"
                  required
                  placeholder="Your Message *"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                />
              </div>

              <button
                id="send-btn2"
                type="submit"
                disabled={disable}
                class="btn btn-primary login-btn"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Walkingregistration;
