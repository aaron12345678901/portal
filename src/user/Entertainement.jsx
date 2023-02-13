import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Logout from "../components/Logout";

const Entertainment = () => {
  const navigate = useNavigate();

  return (
    <div className="entertainment-container">
      <div className="entertainment-home-head">

    
      <div className="back-arrow" onClick={() => navigate(-1)}>
          <div className="img-container"></div>
        </div>
        <div className="profile-logo">
          <h2>the</h2>
          <h1>portal</h1>
          <p>Entertainment</p>
        </div>
        
        <div className="logout-btnsP">
          <Logout></Logout>
        </div>
      </div>

      <div className="e-firstline-links">
     
   
    
  <a href="https://www.games.co.uk/" rel="youtube">
        <div className="efirst-link">
          <div className="efirst-img"></div>
          <div className="efirst-link-text">
            <p>games</p>
          </div>
        </div>
  </a>  
        

  <a href="https://www.justwatch.com/" rel="movies">
        <div className="esecond-link">
          <div className="esecond-img"></div>
          <div className="esecond-link-text">
            <p>movies</p>
          </div>
        </div>
        </a>  

      </div>


      <a href="https://www.youtube.com/" rel="youtube">
      <div className="e-third-links">
        <div className="ethird-link">
          <div className="ethird-img"></div>
        </div>
        <div className="ethird-line-text">
          <p>youtube</p>
        </div>
      </div>
      </a>  
      
    </div>
  );
};

export default Entertainment;
