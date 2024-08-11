import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../utils/utils";

export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#f9fcfd" }} className="mt-5 pb-4">
        <hr />

        <div className="container mt-4">
          <div className="row align-items-start">
            <div className="col-md-3 col-sm-6 my-4">
              <div className="text-danger mb-1 d-flex align-items-center">
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
                  alt=""
                  className=""
                  style={{ height: "5vh" }}
                />
                <small className="fw-bold fs-5">EMart</small>
              </div>
              Join us to buy affordable and quality.
              <br /> made in India.
              <h4 className="d-flex my-4" style={{ cursor: "pointer" }}>
                <a
                  href="https://www.linkedin.com/in/yogesh-pawar-1309a021a/"
                  className="text-dark"
                >
                  <i className="fab fa-linkedin-in mx-1 linkedInHover"></i>
                </a>
                <a href="https://github.com/yograjput" className="text-dark">
                  <i className="fab fa-github mx-1 githubHover"></i>
                </a>
                <div href="" className="text-dark">
                  <i className="mx-1 fab fa-twitter twitterHover"></i>
                </div>
                <a
                  href="https://youtube.com/channel/UCL3NidXnFqDpHrIFl9VqTwQ"
                  className="text-dark"
                >
                  <i className="mx-1 fab fa-youtube youtubeHover"></i>
                </a>
              </h4>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="fs-4 text-danger">Reach Us</div>
              <hr style={{ width: "220px" }} className="my-1" />
              <div>
                Paarsh Infotech Pvt Ltd. Office no. 1 Bhakti Apartment, Near
                Rasoi Hotel , Suchita Nagar Mumbai Naka.
                <br />
                Nashik 422001
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="fs-4 text-danger">Contact Us</div>
              <hr style={{ width: "220px" }} className="my-1" />

              <div className="mt-2">
                📞 <span className="quicklink ms-1">+91-882569756</span>
                <br />
                ✉️
                <span className="quicklink ms-2">paarshinfotech@gmail.com</span>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="fs-4 text-danger">Follow Us On</div>
              <hr style={{ width: "220px" }} className="my-1" />
              <div className="d-flex mt-4 ms-1">
                {SOCIAL_MEDIA_LINKS.map((link) => {
                  return (
                    <a key={link.title} href={link.href} className="me-4">
                      <Icon icon={link.icon} width={30} height={30} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <hr className="mt-4 mb-1" />
          <div className="fs-6">
            copyrights@<span className="fw-bold">Paarsh Infotech Pvt Ltd </span>
            All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
