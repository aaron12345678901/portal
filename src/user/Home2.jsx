import React from "react";
import {Outlet, Link } from 'react-router-dom';


const Home2 = () => {
    return (
        <div className="container">
<div className="home-head">
    <div className="logo">
        <h2>the</h2>
        <h1>portal</h1>
    </div>
    <div className="user-id">
        <p>Welcome:place holder</p>
        
    </div>
</div>

<div className="h-firstline-links">

<Link to="Profile">
    <div className="hfirst-link">
        <div className="hfirst-img"></div>
        <div className="hfirst-link-text">
            <p>profile</p>
        </div>
    </div>
    </Link>
    <div className="hsecond-link">
        <div className="hsecond-img"></div>
        <div className="hsecond-link-text">
            <p>treatment</p>
        </div>
    </div>
    </div>  

    <div className="h-third-links">
    
        <div className="hthird-link">
            <div className="hthird-img">
         </div>

        
        </div>
        
        <div className="hthird-line-text">
            <p>entertainment</p>
        </div>
        
    </div>



 <Outlet />
</div>

 
    )
}

export default Home2