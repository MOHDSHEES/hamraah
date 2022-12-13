/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";

function Donation() {
  return (
    <div className="donation-container">
      <div className="donation-heading">Donate Legacy</div>
      <div className="donation-content boxshadow">
        <h3 style={{ fontWeight: "500 " }}>How to Donate Legacy :</h3>
        <br /> Every bit of help from your side makes a difference. When you
        leave us a legacy, it assists us in planning long term projects. Hamraah
        Foundation has legacy pledges especially for people who want to leave us
        a legacy. This helps us in not only knowing the intention of our
        supporters but also gives us a fair idea about how much funds will be
        available to us in the future. This is precisely why legacy pledges are
        important for us.
        <br />
        <br /> If you have never made a Will before: Please visit a
        lawyer/solicitor who will help you assess your assets and prepare a
        will. You will need to inform the lawyer and the executor of the will
        that you would like to make a bequest to Hamraah Foundation.
        <br />
        <br /> If you already have a Will: If you have already made a will then
        you will need to add a Codicil through your lawyer. The Codicil will
        state your bequest to Hamraah Foundation.
        <br />
        <br /> For people who want to donate us a legacy, we have a legacy
        pledge form which helps us know about their intentions.
        <br />
        <br /> Please download the form and mail it to Hamraah Foundation at
        info.hamraah@gmail.com.
        <br />
        <br /> In case of any queries or clarifications please feel free to
        contact us at 9315114388 or contact us at our office address.
        <div className="donation-btns">
          <a
            href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
            target="_blank"
            type="button"
            className="btn btn-main help-btn"
          >
            Donate Now
          </a>
          <a
            type="button"
            style={{ color: "white" }}
            className="btn btn-main help-btn"
            href="LEGACY-PLEDGE-FORM.docx"
            download
          >
            <i
              style={{ paddingRight: "10px" }}
              class="fa fa-download"
              aria-hidden="true"
            ></i>{" "}
            Legacy Pledge Form
          </a>
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
  );
}

export default Donation;
