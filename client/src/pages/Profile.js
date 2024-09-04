import React, { useEffect, useState } from "react";
import axiosInstance from "../helpers/axios";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`user/getUserById/${user._id}`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data.response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mb-3"
                alt="Profile"
              />
              <h4 className="card-title">{userData?.name}</h4>
              <p className="card-text">Software Developer</p>
              <p className="card-text text-muted">{userData?.email}</p>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile Information</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
