import React from "react";
import profile from "../assets/profile.jpg";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={profile} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={profile} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
