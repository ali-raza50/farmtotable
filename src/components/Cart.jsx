import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBCardText,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "../Styles/Cart.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function QuantityEdit() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/cart");
        setCartItems(response.data); // Assuming the API response is an array of cart items
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);
  const deleteItem = async (itemId) => {
    console.log("Deleting item with ID:", itemId);
    try {
      await axios.delete(`http://localhost:8080/api/cart/${itemId}`);
      console.log("Item deleted successfully.");
      // Update cartItems state using functional form of setState
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
      window.location.reload();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const incrementQuantity = (itemId) => {
    console.log(itemId);
    setCartItems(
      cartItems.map((item) => {
        if (item._id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decrementQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) => {
        if (item._id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <section className="h-100 ">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{
                  borderRadius: "15px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {cartItems.length} items
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />

                        {cartItems.map((item, index) => (
                          <MDBRow
                            key={index}
                            className="mb-4 d-flex justify-content-between align-items-center"
                          >
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={item.image}
                                fluid
                                className="rounded-3"
                                alt={item.name}
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {item.category}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                {item.name}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="3"
                              lg="3"
                              xl="3"
                              className="d-flex align-items-center"
                            >
                              <MDBBtn
                                color="link"
                                className="px-2"
                                onClick={() => decrementQuantity(item._id)}
                              >
                                <MDBIcon fas icon="minus" />
                              </MDBBtn>

                              <MDBInput
                                style={{
                                  backgroundColor: "white",
                                  width: "100px",
                                  marginBottom: "0px",
                                  textAlign: "center",
                                }}
                                type="number"
                                min="100"
                                value={item.quantity}
                                readOnly
                              />
                              {/* <button
                                onClick={() => decrementQuantity(item._id)}
                              >
                                minus
                              </button> */}
                              {/* <input
                                value={item.quantity}
                                style={{
                                  color: "black",
                                  margin: "30px",
                                  width: "100px",
                                }}
                                readOnly
                              /> */}
                              {/* <button
                                onClick={() => incrementQuantity(item._id)}
                              >
                                plus
                              </button> */}
                              <MDBBtn
                                color="link"
                                className="px-2"
                                onClick={() => incrementQuantity(item._id)}
                              >
                                <MDBIcon fas icon="plus" />
                              </MDBBtn>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                Rs. {item.price}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <Link
                                href="#!"
                                className="text-muted"
                                onClick={() => deleteItem(item._id)}
                              >
                                <MDBIcon fas icon="times" />
                              </Link>
                            </MDBCol>
                          </MDBRow>
                        ))}
                        <hr className="my-4" />
                        <hr className="my-4" />

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText
                              tag="a"
                              href="#!"
                              className="text-body"
                            >
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                              Back to shop
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Summary
                        </MDBTypography>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            items {totalItems}
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            € {totalPrice.toFixed(2)}
                          </MDBTypography>
                        </div>
                        {/* Shipping and other options */}
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            € {totalPrice.toFixed(2)}
                          </MDBTypography>
                        </div>
                        <MDBBtn color="dark" block size="lg">
                          Go to checkout
                        </MDBBtn>
                      </div>
                    </MDBCol>
                    {/* <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            items 3
                          </MDBTypography>
                          <MDBTypography tag="h5">€ 132.00</MDBTypography>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Shipping
                        </MDBTypography>

                        <div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{ width: "100%" }}
                          >
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Give code
                        </MDBTypography>

                        <div className="mb-5">
                          <MDBInput size="lg" label="Enter your code" />
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">€ 137.00</MDBTypography>
                        </div>

                        <MDBBtn color="dark" block size="lg">
                          Register
                        </MDBBtn>
                      </div>
                    </MDBCol> */}
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </>
  );
}
