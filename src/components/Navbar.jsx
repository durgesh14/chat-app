import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import profile from "../assets/profile.jpg";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  // Returns the JSX structure for the Navbar component.
  return (
    <div className="navbar">
      <span className="logo">React Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
