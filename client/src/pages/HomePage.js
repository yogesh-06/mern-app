import React, { useEffect, useState } from "react";
import CommonCard from "../common/CommonCard";
import axios from "axios";
import Banner from "../components/Banner";
import { HOME_BANNERS } from "../utils/utils";

export default function HomePage({ searchQuery, filterCategory }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log("filterCategory====", filterCategory);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/get-all-products/")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  useEffect(() => {
    if (filterCategory) {
      setFilteredProducts(
        products.filter((product) =>
          product.category.toLowerCase().includes(filterCategory.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [filterCategory, products]);

  return (
    <div className="container">
      <Banner banners={HOME_BANNERS} />
      <div className="row row-cols-5 justify-content-between">
        {filteredProducts?.map((product) => {
          return <CommonCard key={product.id} product={product} />;
        })}
      </div>
      {filteredProducts.length == 0 && (
        <div className="container text-center mt-5">
          <div className=" alert-info">
            <h3 className="alert-heading fw-bolder">No Data Found</h3>
            <p>
              We couldn't find any results matching your search criteria. Please
              try again with different keywords or check back later.
            </p>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
}
