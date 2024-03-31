import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import ChatPopup from "./ChatPopUp";
import "../Styles/ChatIcon.css";
const ChatIcon = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="chat-icon-container">
      <FaCommentDots className="chat-icon" onClick={toggleChat} />
      {showChat && <ChatPopup />}
    </div>
  );
};

export default ChatIcon;
