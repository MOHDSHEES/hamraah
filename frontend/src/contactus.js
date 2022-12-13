/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import axios from "axios";
function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [disable, setdisable] = useState(false);
  const [response, setresponse] = useState();

  // popup control and form clear
  useEffect(() => {
    if (response) {
      setname("");
      setemail("");
      setsubject("");
      setmessage("");
      setdisable(false);
      document.getElementById("send-btn").innerHTML = "Send Message";
      document.getElementById("popup").classList.remove("alert-close");
      document.getElementsByClassName("contact-alert").innerHTML =
        response.message;
      setTimeout(() => {
        document.getElementById("popup").classList.add("alert-close");
      }, 3000);
    }
  }, [response]);

  // form submit handler
  function submitHandler(e) {
    e.preventDefault();
    setdisable(true);
    document.getElementById("send-btn").innerHTML = "Sending...";
    const sendMail = async () => {
      const { data } = await axios.post("/api/contact/sendemail", {
        name,
        email,
        subject,
        message,
      });
      setresponse(data);
    };
    sendMail();
  }
  // console.log(response);
  return (
    <div>
      <div className="alert-container  ">
        <div
          className="contact-alert boxshadow  alert-close alert-open "
          id="popup"
        >
          {response ? response.message : ""}
        </div>
      </div>
      <div style={{ color: "white" }} class="sellermain">
        <div class="sellerform">
          <div class="seller-account">Write To Us</div>
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
                type="text"
                class="form-control"
                id="inputSubject"
                placeholder="Subject"
                value={subject}
                autoComplete="off"
                onChange={(e) => setsubject(e.target.value)}
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
              id="send-btn"
              type="submit"
              disabled={disable}
              class="btn btn-primary login-btn"
            >
              Send Message
            </button>
          </form>
        </div>
        <div class="sellerpoint">
          <div class="seller-registration-heading">
            <h2 style={{ color: "white" }}>Office</h2>
          </div>
          <div class="seller-registration-info ">
            Regd Address : 2426/X Shah Abul Khair Marg,Turkman
            Gate,Delhi-110006,INDIA Office Address : E- 136/2, 4th Floor, Shibli
            Road Shaheen Bagh, Okhla,New Delhi- 110025,INDIA <br />
            E-mail : info.hamraah@gmail.com <br /> Website :
            <a className="contact-a" href=" https://www.hamraahfoundation.org">
              https://www.hamraahfoundation.org{" "}
            </a>
            <a
              className="contact-a"
              target="_blank"
              href="http://in.linkedin.com/pub/hamraah-foundation/60/568/490"
            >
              
            </a>
          </div>

          <div class="seller-registration-info-div">
            <hr style={{ backgroundColor: "white", width: "80%" }} />
            <div style={{ padding: "10px 0 5px" }}>
              <div class="seller-registration-heading">
                <h2 style={{ color: "white" }}>Contacts</h2>
              </div>

              <div class="seller-registration-info">
                <p style={{ color: "white" }}>
                  <b> Chairman/Executive Head,</b> <br />
                  17 years of professional experience, NGO Management & Project
                  Management, Email: info.hamraah@gmail.com Contact: +91
                  9315114388
                </p>
              </div>

              <div class="seller-registration-info">
                <p style={{ color: "white" }}>
                  <b> Abdul Rauf,</b> <br />
                  Program Heads, CSR Projects, Professional Social Worker, With
                  7 Years of professional Experience, Email:
                  abdul.hamraah@gmail.com,{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
