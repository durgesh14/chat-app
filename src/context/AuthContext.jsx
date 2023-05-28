import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();
// It takes children as a prop and provides the AuthContext to all the child components.
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  // It sets up an onAuthStateChanged listener which updates the currentUser state whenever the authenticated user changes.
  useEffect(() => {
    // It sets up an onAuthStateChanged listener which updates the currentUser state whenever the authenticated user changes.
    const oac = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      oac();
    };
  }, []);
  return (
    // This Provider component makes the currentUser state available to all child components.
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
