import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axios";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const user = JSON.parse(localStorage.getItem("user"));
  const { _id, title, description, rating, image, category, price } = product;
  // console.log(product);

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <div className=" alert-info">
          <h3 className="alert-heading fw-bolder">No Data Found</h3>
          <p>
            We couldn't find any results matching your search criteria. Please
            try again with different keywords or check back later.
          </p>
        </div>
      </div>
    );
  }

  const handleCart = (id) => {
    const data = {
      userId: user._id,
      productId: _id,
      title: title,
      image: image,
      price: price,
      quantity: 1,
    };
    console.log("data==>", data);

    axiosInstance
      .post("cart/add-to-cart", data)
      .then((res) => {
        console.log("===response===", res);
      })
      .catch((error) => {
        console.log("error==", error);
      });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="text-warning">
        {[...Array(fullStars)].map((_, index) => (
          <Icon key={`full-${index}`} icon="emojione:star" />
        ))}
        {halfStar && <Icon icon="openmoji:star-with-right-half-black" />}
        {[...Array(emptyStars)].map((_, index) => (
          <Icon key={`empty-${index}`} icon="bitcoin-icons:star-outline" />
        ))}
      </div>
    );
  };

  const discountRate = 0.1;
  const discountedPrice = price - price * discountRate;

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary ms-5 d-flex"
      >
        <span className="">
          <Icon icon="ic:outline-arrow-back-ios" className="mb-1" />
        </span>

        <span>Back</span>
      </button>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={image}
              alt={title}
              className="img-fluid"
              style={{ height: "50vh" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{title}</h2>
            <h4 className="text-danger">
              ${discountedPrice.toFixed(2)}{" "}
              <span className="text-muted">${price}</span>
            </h4>
            <p className="text-muted">{description}</p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Rating:</strong> {renderStars(rating.rate)} (
              {rating.count} reviews)
            </p>
            <button className="btn btn-warning" onClick={() => handleCart(_id)}>
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/check-out")}
              className="btn btn-danger ms-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
