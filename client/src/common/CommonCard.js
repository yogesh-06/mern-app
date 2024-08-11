import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CommonCard({ product }) {
  const navigate = useNavigate();
  const { _id, title, description, rating, image, category, price } = product;

  return (
    <div className="card m-2 shadow-sm" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top p-1 align-self-center"
        style={{ height: "24vh", width: "74%" }}
        alt={title}
      />
      <div className="card-body px-1">
        <h5 className="card-title fw-semibold" style={{ color: "inherit" }}>
          {title.slice(0, 42)}
        </h5>
        <p className="card-text fw-semibold" style={{ color: "#6c747c" }}>
          Rs. {price} /-
        </p>
      </div>
      <div className="d-flex px-1 justify-content-between align-items-center ">
        <p className="">Available: {Math.round(rating.rate) + 5}</p>
        <p
          onClick={() => navigate(`/details/${_id}`, { state: { product } })}
          className="btn btn-outline-primary btn-sm"
        >
          More Details
        </p>
      </div>
    </div>
  );
}
