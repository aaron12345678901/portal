import React from "react";
import Logout from "../components/Logout";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Map = () => {
    const navigate = useNavigate();

  return (
 <div className="map-page-container">


  <div className="profile-home-head">
        <div className="back-arrow" onClick={() => navigate(-1)}>
          <div className="img-container"></div>
        </div>

        <div className="profile-logo">
          <h2>the</h2>
          <h1>portal</h1>
        </div>

        <div className="logout-btnsP">
          <Logout></Logout>
        </div>
      </div>


 </div>
  
  );
};

export default Map;

