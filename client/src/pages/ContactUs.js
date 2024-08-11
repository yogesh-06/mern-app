import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
const mapContainerStyle = {
  position: "relative",
  height: "400px",
  width: "100%",
};

const iframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "0",
};

export default function ContactUs() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-6 mb-4 border">
          <div style={{ ...mapContainerStyle }}>
            <iframe
              title="Prasad Circle, Gangapur Road, Nashik"
              src="https://maps.google.com/maps?q=st%20colony,%20gangapur%20road,%20nashik&t=&z=18&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              style={{ ...iframeStyle }}
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
          <div className="card border-0">
            <div className="card-body">
              <div>
                <a
                  href="https://in.linkedin.com/in/pathfinder06?trk=profile-badge"
                  className="badge-base__link"
                >
                  Say hello
                </a>
              </div>
              <p className="card-text">Here's the links 👇🏻</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <Icon icon="logos:whatsapp-icon" width={18} height={18} />
                  <a
                    href="https://wa.me/9765618373"
                    className="ms-2 text-secondary"
                  >
                    https://wa.me/9765618373
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <Icon icon="logos:google-gmail" width={18} height={18} />
                  <a
                    href="mailto:yogeshdpawar.06@gmail.com"
                    className="ms-2 text-secondary"
                  >
                    yogeshdpawar.06@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6 mt-5 mt-md-0 ">
          <h1
            className="text-dark mb-3 fw-bolder"
            style={{ fontFamily: "system-ui" }}
          >
            Get In Touch
          </h1>
          <p
            className="text-secondary"
            style={{ fontFamily: "-apple-system, system-ui" }}
          >
            Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt
            et, tincidunt eget, semper nec, quam. Sed lectus. Etiam rhoncus.
            Nullam vel sem.
          </p>
          <form
            action="https://formsubmit.co/2eb9226bf7d806f79c7fc0c21dfb99dd"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New e-mail!" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/contact-us"
            />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for connecting with me!"
            />
            <input type="hidden" name="_template" value="table" />

            <div className="row g-3">
              <div className="col-12">
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control form-control-custom"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                  <label for="name">Full Name</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-1">
                  <input
                    type="email"
                    className="form-control form-control-custom"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    required
                  />
                  <label for="email">E-mail</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-1">
                  <input
                    type="tel"
                    className="form-control form-control-custom"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone No."
                    required
                    pattern="[1-9]{1}[0-9]{9}"
                  />
                  <label for="phoneNumber">Phone No.</label>
                </div>
              </div>

              <div className="col-12">
                <div className="form-floating mb-1">
                  <textarea
                    className="form-control form-control-custom"
                    id="message"
                    name="message"
                    placeholder="Message"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label for="message">Message</label>
                </div>
              </div>

              <div className="col-12 text-end">
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-custom"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
