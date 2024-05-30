import React from "react";
import decor2 from "../img/decor2.png";
import honey from "../img/honey.png";
import desighee from "../img/desighee.png";
import butter from "../img/butter.png";
import "../Styles/products.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section
      className="our-products-area section-padding-100"
      style={{ padding: "100px" }}
    >
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div className="section-heading text-center ">
              <p>Featured Products</p>
              <h2>
                <span>Our Product</span> Are Highest Quality
              </h2>
              <div className="d-flex justify-content-center">
                <img src={decor2} alt="deco" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single-product-area mb-50 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="product-thumbnail">
                <img src={honey} alt="honey" />

                <span className="product-tags">Hot</span>

                <div className="product-meta-data">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Favourite"
                  >
                    <FaHeart />
                  </a>
                  <a
                    href="/cart"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add To Cart"
                  >
                    <FaShoppingCart />
                  </a>
                </div>
              </div>
              <div className="product-desc text-center pt-4">
                <a href="#/" className="product-title">
                  Pure Honey
                </a>
                <h6 className="price">
                  <span>$29.99</span> $19.99
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single-product-area mb-50 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="product-thumbnail">
                <img src={desighee} alt="honey" />

                <div className="product-meta-data">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Favourite"
                  >
                    <FaHeart />
                  </a>
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add To Cart"
                  >
                    <FaShoppingCart />
                  </a>
                </div>
              </div>
              <div className="product-desc text-center pt-4">
                <a href="#/" className="product-title">
                  Desi Ghee
                </a>
                <h6 className="price">$19.99</h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single-product-area mb-50 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="product-thumbnail">
                <img src={butter} alt="honey" />

                <div className="product-meta-data">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Favourite"
                  >
                    <FaHeart />
                  </a>
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add To Cart"
                  >
                    <FaShoppingCart />
                  </a>
                </div>
              </div>
              <div className="product-desc text-center pt-4">
                <a href="#/" className="product-title">
                  Butter
                </a>
                <h6 className="price">$19.99</h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div
              className="single-product-area mb-50 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="product-thumbnail">
                <img src={honey} alt="honey" />

                <span className="product-tags bg-danger">sale</span>

                <div className="product-meta-data">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Favourite"
                  >
                    <FaHeart />
                  </a>
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add To Cart"
                  >
                    <FaShoppingCart />
                  </a>
                </div>
              </div>
              <div className="product-desc text-center pt-4">
                <a href="#/" className="product-title">
                  Pure Honey
                </a>
                <h6 className="price">$19.99</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="gotoshop-btn text-center wow fadeInUp"
              data-wow-delay="900ms"
            >
              <Link
                style={{ textDecoration: "none" }}
                to="/dairyProducts"
                className="btn famie-btn "
              >
                Go to Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
