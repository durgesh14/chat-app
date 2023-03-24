import React from "react";
import profile from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={profile} alt="" />
        <span>Durgesh</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
