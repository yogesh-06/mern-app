import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Dashboard = ({ setSearchQuery, setFilterCategory, isLoggedIn }) => {
  return (
    <>
      <Navbar
        setSearchQuery={setSearchQuery}
        setFilterCategory={setFilterCategory}
        isLoggedIn={isLoggedIn}
      />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
