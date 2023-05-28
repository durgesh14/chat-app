import React, { useContext } from "react";
import Input from "../components/Input";
import Messages from "../components/Messages";
import profile from "../assets/profile.jpg";
import friend from "../assets/friend.svg";
import dot from "../assets/dot.svg";
import video from "../assets/video.svg";
import avatar from "../assets/avatar.svg";

// Importing the ChatContext to get access to the chat data within this component.
import { ChatContext } from "../context/ChatContext";

// The Chat function component represents the main chat interface
const Chat = () => {
  const { data } = useContext(ChatContext); // Using the useContext React hook to pull out the data from the ChatContext.
  // Returns the JSX structure for the Chat component.
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={video} alt="" />
          <img src={friend} alt="" />
          <img src={dot} alt="" />
        </div>
      </div>
      <div className="welcomeScreen">{/* <img src={avatar} alt="" /> */}</div>
      {/* This is a component that handles the display of chat messages. */}
      <Messages />
      {/* // This is a component that handles the input of new chat messages.
       */}
      <Input />
    </div>
  );
};

export default Chat;
