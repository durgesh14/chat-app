import { signOut } from "firebase/auth";
import React from "react";
import profile from "../assets/profile.jpg";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={profile} alt="" />
        <span>Durgesh</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
