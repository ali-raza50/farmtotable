import React from "react";
import decor2 from "../img/decor2.png";
import honey from "../img/honey.png";
import "../Styles/products.css";
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
                    <i className="icon_heart_alt"></i>
                  </a>
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add To Cart"
                  >
                    <i className="icon_cart_alt"></i>
                  </a>
                </div>
              </div>
              <div className="product-desc text-center pt-4">
                <a href="#/" className="product-title">
                  Honey
                </a>
                <h6 className="price">Rs 17.99</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
