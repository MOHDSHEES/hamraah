import React, { useState, useEffect } from "react";
import axios from "axios";

function Modalpledge() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobileno, setmobileno] = useState("");
  const subject = "Pledge";
  const [response, setresponse] = useState();
  const [disable, setdisable] = useState(false);

  useEffect(() => {
    if (response) {
      setname("");
      setemail("");

      setmobileno("");
      setdisable(false);
      document.getElementById("send-btn1").innerHTML = "submit";
      document.getElementById("popup1").classList.remove("alert-close");
      document.getElementsByClassName("contact-alert").innerHTML =
        response.message;
      setTimeout(() => {
        document.getElementById("popup1").classList.add("alert-close");
      }, 3000);
    }
  }, [response]);

  // form submit handler
  function submitHandler(e) {
    e.preventDefault();
    setdisable(true);
    document.getElementById("send-btn1").innerHTML = "Sending...";
    const sendMail = async () => {
      const { data } = await axios.post("/api/pledge/sendemail", {
        name,
        email,
        subject,
        mobileno,
      });
      setresponse(data);
    };
    sendMail();
  }

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered " role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Take pledge
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="alert-container  ">
                <div
                  className="contact-alert boxshadow  alert-close alert-open "
                  id="popup1"
                >
                  {response ? response.message : ""}
                </div>
              </div>
              <form onSubmit={submitHandler}>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    YOUR NAME :
                  </label>
                  <input
                    value={name}
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your name "
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Email :
                  </label>
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    name="email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter you Email id "
                  />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">
                    Mobile no :
                  </label>
                  <input
                    onChange={(e) => setmobileno(e.target.value)}
                    value={mobileno}
                    name="mobileno"
                    type="tel"
                    class="form-control"
                    id="mobile"
                    placeholder="Enter your 10 digit mobile no "
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    id="send-btn1"
                    disabled={disable}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalpledge;
