import { Routes, Route } from "react-router-dom";
import MainApp from "./components/MainApp";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import InventoryManagement from "./components/InventoryManagement";
import FetchData from "./components/FetchData";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Profile />} />
        <Route path="/calculator" element={<MainApp />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/fetchdata" element={<FetchData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
