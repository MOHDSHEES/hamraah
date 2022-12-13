import React from "react";
import { Link } from "react-router-dom";

function Careers() {
  return (
    <div className="donation-container">
      <div className="donation-heading">Careers</div>
      <div className="donation-content boxshadow">

      Do you believe that everyone should have equal opportunities like access to education, access to healthcare, equal employment opportunities? Do you also believe in the idea of raising the standard of living of all people in the country? If yes, then be a part of a team that mobilizes large number of population across India to work together for a better tomorrow.
<br />
<br />

How would you like to :
<ul>
<li>
Manage a society that provides a platform for underprivileged and most vulnerable section of society, especially the children, youth and adults.
</li>
<li>
Build a team of professionals who strive to achieve the vision and mission of the society.
</li>
<li>
Initiate programmes that aim to improve the quality of life of all individuals.
</li>
<li>
Shape government policy so that marginalised sections of the society also get their basic rights.
</li>
</ul>
<br />
At Hamraah Foundation, you can do all this and even more.
<br />
<br />
To know more, browse the ‘About Us’ section of the site, or write to us at info.hamraah@gmail.com for any queries you have about career opportunities at Hamraah Foundation.
      <div className="donation-btns">
          <a
            href="https://eazypay.icicibank.com/eazypayLink?P1=WxfQ194V/RUva+36QYJv6w="
            target="_blank"
            type="button"
            className="btn btn-main help-btn"
          >
            Donate Now
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

export default Careers;
