import React from "react";
import { Link } from "react-router-dom";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaCarSide } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './Nav.css'

const Nav = () => {
  return (
    <div>
      {/* navbar for large device */}

      <section className="">
        <nav class="navbar d-none  d-sm-none d-md-none d-lg-block navbar-expand-lg p-3 ms-5 me-5">
          <div class="container-fluid ">
            <Link class="navbar-brand fs-5 fw-semibold" to="/">
             Solution
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
             
             <div>
                <p className="pt-3 ms-5 category fw-semibold">Category</p>
             </div>

              <ul class="navbar-nav larg-nav m-auto">
                <li class="nav-item">
                  <Link class="nav-link me-4 fw-semibold" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-4 fw-semibold" to="/about">
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-4 fw-semibold" to="/courses">
             Courses{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-4 fw-semibold" to="/blog">
                    Blog
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link me-4 fw-semibold" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

              <form class="d-flex justify-content-center align-items-center form" role="search">
                <input
                  class="form-control me-2 w-75"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              <div>
                <ul className=" navbar-nav m-auto me-4">

                    
                  <li class="nav-item pe-3">
                    <Link class="nav-link " to="/cart">
                      {" "}
                      <span className="me-1">
                        <FaShoppingCart style={{height:"22px",width:"22px"}} />
                      </span>{" "}
            
                    </Link>
                  </li>
                  <li class="nav-item me-5 pe-5">
                    <Link class="nav-link" to="#">
                      {" "}
                      <span className="me-1">
                        <FaHeart style={{height:"22px",width:"22px"}}/>
                      </span>{" "}
                      
                    </Link>
                  </li>
                 

                  <Link class="nav-link" to="/signin">
                    {" "}
                    <span className="me-1">
                      <FcGoogle  style={{width:"20px",height:"20px"}}/>
                    </span>
                    Login
                  </Link>

                </ul>
              </div>

              <div></div>
            </div>
          </div>
          <div></div>
        </nav>
      </section>

      {/* navbar for small and large device */}

      <nav class="navbar d-lg-none bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            Offcanvas navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#">
                    Link
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link class="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
