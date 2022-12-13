import React from "react";

function Modal() {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade "
        id="Modal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered " role="document">
          <div class="modal-content  ">
            <div class="modal-header donate-modal">
              <button
                style={{ color: "#ffffff" }}
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body modal-img">
              <div className="">
                {" "}
                <img src="https://img.freepik.com/free-vector/volunteers-packing-donation-boxes_74855-5299.jpg?size=626&ext=jpg" />
              </div>
              <div className="modal-textt">
                Help Raise funds for Covid-19 in India by Rahul, Hamraah
                Foundation
              </div>
            </div>
            <div class="modal-footer ">
              <a
                href="https://milaap.org/fundraisers/support-donating-oxygen-cylinder-to-covid-19-patients"
                target="_blank"
                type="button"
                class="btn btn-primary"
              >
                Please Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
