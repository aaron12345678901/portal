import React from "react";
import {Outlet, Link,useNavigate } from 'react-router-dom';

const Entertainment = () => {

    const navigate = useNavigate();

    return (
        <div className="entertainment-container">

<div className="profile-home-head">
   

   <div className="back-arrow" onClick={() => navigate(-1)}>
    <div className="img-container">

    </div>
   </div>
   
 <div className="profile-logo">
        <h2>the</h2>
        <h1>portal</h1>
        <p>Entertainment</p>
    </div>

</div>

  <div className="e-firstline-links">
    <div className="efirst-link">
        <div className="efirst-img"></div>
        <div className="efirst-link-text">
            <p>games</p>
        </div>
    </div>
    
    <div className="esecond-link">
        <div className="esecond-img"></div>
        <div className="esecond-link-text">
            <p>movies</p>
        </div>
    </div>
    </div>  

    <div className="e-third-links">
        <div className="ethird-link">
            <div className="ethird-img">

            </div>
        </div>
        <div className="ethird-line-text">
            <p>youtube</p>
        </div>
    </div>
    <Outlet />
</div>



 
    )
}

export default Entertainment