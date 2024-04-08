import { Routes, Route } from "react-router-dom";
import MainApp from "./components/MainApp";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import InventoryManagement from "./components/InventoryManagement";
import FetchData from "./components/FetchData";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDetails from "./components/UserDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setLoggedIn(true);
    } else if (!["/login", "/register"].includes(location.pathname)) {
      navigate("/login");
    }
  }, [location]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {loggedIn && (
          <>
            <Route index element={<Profile />} />
            <Route path="/calculator" element={<MainApp />} />
            <Route
              path="/inventory-management"
              element={<InventoryManagement />}
            />
            <Route path="/fetchdata" element={<FetchData />} />
            <Route path="/user-details" element={<UserDetails />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
