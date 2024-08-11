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

function App() {
  const isLoggedIn = false;
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
              isLoggedIn={isLoggedIn}
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
            element={<PrivateRoute isLoggedIn={isLoggedIn} element={Profile} />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path={"/check-out"}
            element={
              <PrivateRoute isLoggedIn={isLoggedIn} element={Checkout} />
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
