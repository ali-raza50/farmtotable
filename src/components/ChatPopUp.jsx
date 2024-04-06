import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../Styles/ChatPopUp.css";
import { Link } from "react-router-dom";

export default function ChatPopUp() {
  return (
    <MDBContainer
      fluid
      className="py-5 chat-popup"
      style={{ backgroundColor: "#CDC4F9" }}
    >
      <MDBRow class="d-flex flex-row justify-content-center align-items-center">
        <MDBCol md="12">
          <MDBCard
            id="chat3"
            style={{
              borderRadius: "15px",
              width: "97%",
              margin: "0",

              height: "100%",
            }}
          >
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                  <h6>Messages</h6>
                  <div className="horizontal-line "></div>

                  <div className="p-3">
                    <div>
                      <MDBTypography listUnStyled className="mb-0">
                        <li className="p-2 border-bottom">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row">
                              <div>
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                  alt="avatar"
                                  className="d-flex align-self-center me-3"
                                  width="60"
                                />
                                <span className="badge bg-success badge-dot"></span>
                              </div>
                              <div className="pt-1">
                                <p className="fw-bold mb-0">Ali Raza</p>
                                <p className="small text-muted">
                                  Hello, Are you there?
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </MDBTypography>
                    </div>
                  </div>
                  <div className="vertical-line d-none d-md-block"></div>
                </MDBCol>

                <MDBCol md="6" lg="7" xl="8">
                  <h6>Seller</h6>
                  <div className="horizontal-line m-2"></div>

                  <div
                    className="chat-popup-content"
                    style={{ maxHeight: "280px", overflowY: "auto" }}
                  >
                    <div className="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                      <div>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f5f6f7" }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Lorem ipsum dolor sit amet, Lorem
                          ipsum dolor sit ame
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                        <p className="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 3"
                      style={{ width: "40px", height: "100%" }}
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput2"
                      placeholder="Type message"
                    />
                    <Link to="#" className="ms-1 text-muted">
                      <MDBIcon fas icon="paperclip" />
                    </Link>
                    <Link to="#" className="ms-3 text-muted">
                      <MDBIcon fas icon="smile" />
                    </Link>
                    <Link to="#" className="ms-3">
                      <MDBIcon fas icon="paper-plane" />
                    </Link>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
