import React from "react";
import "./Contact.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="heading-container">
          <img
            src="https://i.ibb.co/C92hb6m/shape-15.png"
            alt=""
            className="img-1 d-none d-lg-block d-md-none d-sm-none"
          />
          <h1 className="">Contact Me</h1>
          <img
            src="https://i.ibb.co/c1MYk8f/shape-07.png"
            alt=""
            className="img-2 d-none d-md-none d-sm-noe d-lg-block"
          />
          <img
            src="https://i.ibb.co/0DrgsY4/shape-13.png"
            alt=""
            className="img-3 d-none d-md-none d-sm-none d-lg-block"
          />
        </div>
      </section>
      <section>
        <div className="row container m-auto mt-5 pt-5">
          {/* <a href="https://ibb.co/G5D6vT4"><img src="https://i.ibb.co/rwhjGsR/contact-me.jpg" alt="contact-me" border="0"></a> */}
          <div className="col col-md-6 col-sm-12 col-lg-6 mt-2">
            <img
              src="https://i.ibb.co/rwhjGsR/contact-me.jpg"
              alt=""
              className="contact-img"
            />
          </div>
          <div className=" col col-sm-12 col-md-6 col-lg-6  text-sm-center m-auto text-md-start text-lg-start contact-info">
            <h2>
              I will Answer all Your <br /> Questions
            </h2>
            <div className="mt-4">
              <h5>Address</h5>
              <p>
                Studio 76d, Riley Ford, North Michael chester, <br /> CF99 6QQ
              </p>
            </div>
            <div className="mt-4">
              <h5>Email</h5>
              <p>iibrahim01081998@gmail.com</p>
            </div>
            <div className="mt-4">
              <h5>Phone</h5>
              <p>+012 54369 87</p>
            </div>
            <div className="mt-4">
              <Link to="/" className="me-4">
                <FaShareAlt className="icon p-2 border rounded" />
              </Link>
              <Link to="/" className="me-4">
                <FaFacebookF className="icon p-2 border rounded" />
              </Link>
              <Link to="/" className="me-4">
                <FaTwitter className="icon p-2 border rounded" />
              </Link>
              <Link to="/" className="me-4">
                <FaLinkedinIn className="icon p-2 border rounded" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
