import React from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";
import profile from "../assets/profile.jpg";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={profile} alt="" />
          <img src={profile} alt="" />
          <img src={profile} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
