import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import { useState } from "react";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./helpers/PrivateRoute";
import Cart from "./pages/Cart";

function App() {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              setSearchQuery={setSearchQuery}
              setFilterCategory={setFilterCategory}
              isLoggedIn={isAuthenticated}
            />
          }
        >
          <Route
            index
            element={
              <HomePage
                searchQuery={searchQuery}
                filterCategory={filterCategory}
              />
            }
          />
          <Route path={"/details/:id"} element={<ProductDetails />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute isLoggedIn={isAuthenticated} element={Profile} />
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute isLoggedIn={isAuthenticated} element={Cart} />
            }
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path={"/check-out"}
            element={
              <PrivateRoute isLoggedIn={isAuthenticated} element={Checkout} />
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
