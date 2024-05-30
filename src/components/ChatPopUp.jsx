import React, { useState, useEffect } from "react";
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
// import userService from "../services/UserService";

export default function ChatPopUp() {
  // const [convos, setConvos] = useState([]);

  // const handleClick = async (ids) => {
  //   const userLoggedin = userService.getLoggedInUser()._id;
  //   const CurrentConvo = await userService.GetConversations(ids, userLoggedin);
  //   setConvos(CurrentConvo);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (userService.isLoggedIn()) {
  //         const loggedInUserId = userService.getLoggedInUser()._id;
  //         const fetchedMessages = await userService.fetchMessages(
  //           loggedInUserId
  //         );
  //         setConvos(fetchedMessages);
  //       } else {
  //         throw new Error("User is not logged in");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching messages:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <></>
    // <MDBContainer
    //   fluid
    //   className="py-5 chat-popup"
    //   style={{ backgroundColor: "#CDC4F9" }}
    // >
    //   <MDBRow class="d-flex flex-row justify-content-center align-items-center">
    //     <MDBCol md="12">
    //       <MDBCard
    //         id="chat3"
    //         style={{
    //           borderRadius: "15px",
    //           width: "97%",
    //           margin: "0",
    //         }}
    //       >
    //         <MDBCardBody style={{ height: "4000px" }}>
    //           <MDBRow>
    //             <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
    //               <h6>Messages</h6>
    //               <div className="horizontal-line "></div>

    //               <div className="p-3">
    //                 {convos.map((convo) => (
    //                   <div
    //                     key={convo._id}
    //                     onClick={() => handleClick(convo._id)}
    //                     style={{ cursor: "pointer" }}
    //                   >
    //                     <MDBTypography listUnStyled className="mb-0">
    //                       <li className="p-2 border-bottom">
    //                         <div className="d-flex justify-content-between">
    //                           <div className="d-flex flex-row">
    //                             <div>
    //                               <img
    //                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
    //                                 alt="avatar"
    //                                 className="d-flex align-self-center me-3"
    //                                 width="60"
    //                               />
    //                               <span className="badge bg-success badge-dot"></span>
    //                             </div>
    //                             <div className="pt-1">
    //                               <p className="fw-bold mb-0">{convo.name}</p>
    //                               <p className="small text-muted"></p>
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </li>
    //                     </MDBTypography>
    //                   </div>
    //                 ))}
    //               </div>

    //               <div className="vertical-line d-none d-md-block"></div>
    //             </MDBCol>

    //             <MDBCol md="6" lg="7" xl="8">
    //               <h6>Seller</h6>
    //               <div className="horizontal-line m-2"></div>

    //               <div
    //                 className="chat-popup-content"
    //                 style={{ maxHeight: "280px", overflowY: "auto" }}
    //               >
    //                 <div className="d-flex flex-row justify-content-start">
    //                   {convos.map((convo) => (
    //                     <div key={convo._id}>
    //                       {convo.messages.map((message, index) => {
    //                         if (message.type === "voice") {
    //                           return (
    //                             <div
    //                               key={index}
    //                               className={`chat-message ${
    //                                 message.sender ===
    //                                 userService.getLoggedInUser()._id
    //                                   ? "sent"
    //                                   : "received"
    //                               }`}
    //                             >
    //                               <audio controls style={{ width: "110px" }}>
    //                                 <source
    //                                   src={`http://localhost:4000/${message.url}`}
    //                                   type="audio/webm"
    //                                 />
    //                               </audio>
    //                             </div>
    //                           );
    //                         } else {
    //                           return (
    //                             <div
    //                               key={index}
    //                               className={`chat-message ${
    //                                 message.sender ===
    //                                 userService.getLoggedInUser()._id
    //                                   ? "sent"
    //                                   : "received"
    //                               }`}
    //                             >
    //                               <div>
    //                                 <p
    //                                   className="small p-2 ms-3 mb-1 rounded-3"
    //                                   style={{
    //                                     backgroundColor:
    //                                       message.sender ===
    //                                       userService.getLoggedInUser()._id
    //                                         ? "#C8E6C9"
    //                                         : "#f5f6f7",
    //                                   }}
    //                                 >
    //                                   {message.message}
    //                                 </p>
    //                                 <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
    //                                   {/* {message.timeStamp} */}
    //                                 </p>
    //                               </div>
    //                             </div>
    //                           );
    //                         }
    //                       })}
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //               <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
    //                 <img
    //                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
    //                   alt="avatar 3"
    //                   style={{ width: "40px", height: "100%" }}
    //                 />
    //                 <input
    //                   type="text"
    //                   className="form-control form-control-lg"
    //                   placeholder="Type message"
    //                 />
    //                 <Link to="#" className="ms-1 text-muted">
    //                   <MDBIcon fas icon="paperclip" />
    //                 </Link>
    //                 <Link to="#" className="ms-3 text-muted">
    //                   <MDBIcon fas icon="smile" />
    //                 </Link>
    //                 <Link to="#" className="ms-3">
    //                   <MDBIcon fas icon="paper-plane" />
    //                 </Link>
    //               </div>
    //             </MDBCol>
    //           </MDBRow>
    //         </MDBCardBody>
    //       </MDBCard>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
  );
}
