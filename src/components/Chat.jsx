import React, { useContext } from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";
import profile from "../assets/profile.jpg";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
