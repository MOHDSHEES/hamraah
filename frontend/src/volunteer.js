/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Volunteer() {
  return (
    <div className="donation-container">
      <div className="donation-heading">Be A Volunteer</div>
      <div className="donation-content boxshadow">
        <h3 style={{ fontWeight: "500 " }}>
          “Together we can change the world, just one random act of kindness at
          a time.”- Ron Hall
        </h3>
        <br /> India is a developing country which is progressing at a rapid
        rate in all spheres of life. However, despite the development, there are
        some important sections of the population like women, children and youth
        who are vulnerable. These sections form a considerable proportion of the
        population but are still denied their basic rights and face
        discrimination. Millions of children in India are the victims of
        poverty. They are practically “invisible” since most of them aren’t even
        listed in any official documentation and are thus deprived of even the
        basic rights. Without an official identity, these children are denied
        access to education, quality health care, other vital services and are
        even forced to work at a tender age leading to serious consequences for
        their childhood and their future. Also, women in the country face
        discrimination at households as well as at work places. They are
        exploited and are subjected to abuse. The condition of children, youth
        and women in the country is far from what it should be.
        <br />
        <br />
        India is a developing country which is progressing at a rapid rate in
        all spheres of life. However, despite the development, there are some
        important sections of the population like women, children and youth who
        are vulnerable. These sections form a considerable proportion of the
        population but are still denied their basic rights and face
        discrimination. Millions of children in India are the victims of
        poverty. They are practically “invisible” since most of them aren’t even
        listed in any official documentation and are thus deprived of even the
        basic rights. Without an official identity, these children are denied
        access to education, quality health care, other vital services and are
        even forced to work at a tender age leading to serious consequences for
        their childhood and their future. Also, women in the country face
        discrimination at households as well as at work places. They are
        exploited and are subjected to abuse. The condition of children, youth
        and women in the country is far from what it should be.
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
            href="HF-internship-application-form.doc"
            download
          >
            <i
              style={{ paddingRight: "10px" }}
              class="fa fa-download"
              aria-hidden="true"
            ></i>{" "}
            Internship Application Form
          </a>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
