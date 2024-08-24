import React, { useState } from "react";
import CommonDropdown from "../common/CommonDropdown";
import { PRODUCT_CATEGORIES } from "../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({
  setSearchQuery,
  setFilterCategory,
  isLoggedIn,
}) {
  const categories = PRODUCT_CATEGORIES;
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-2">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="Logo"
            className="d-inline-block align-text-top rounded-5 me-1"
            style={{ height: "6vh" }}
          />
          EMart
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <CommonDropdown
                elements={categories}
                selectedElement={setFilterCategory}
              />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact-us
              </a>
            </li>
          </ul>

          <form className="d-flex " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={(e) => {
                setSearchQuery(e.target.value);
                navigate("/");
              }}
            />
          </form>

          {isLoggedIn ? (
            <>
              <a className="me-2 " href="/cart">
                <button type="button" class="btn btn-sm btn-primary">
                  cart
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
                    alt="Profile Icon"
                    style={{ height: "3vh", width: "4vh" }}
                  />
                </button>
              </a>
              <a className="border rounded-circle" href="/profile">
                <img
                  src="https://c8.alamy.com/zooms/9/9c30002a90914b58b785a537a39421ba/2c80ydc.jpg"
                  alt="Profile Icon"
                  className="rounded-circle"
                  style={{ height: "4vh" }}
                />
              </a>
            </>
          ) : location.pathname === "/login" ? (
            <a className="btn btn-primary btn-sm" href="/register">
              Register
            </a>
          ) : (
            <a className="btn btn-primary btn-sm" href="/login">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
