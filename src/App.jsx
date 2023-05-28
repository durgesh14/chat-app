import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext); // Using the useContext React hook to access the current user from the AuthContext.

  // Defining a ProtectedRoute function that checks if there is a logged-in user. If there isn't, it redirects the user to the login page.
  //If there is, it allows access to the children passed in
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  // Returning a JSX component structure
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
