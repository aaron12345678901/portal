import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

const Home = () => {
///////register////////



  return (
    <div className='home-page'>
<div className="logoh">
        <h2>the</h2>
        <h1>portal</h1>
    </div>

<div className='input_wrap'>
  
<div className='register_wrap'>
  <Register>
  </Register>
</div>

<div className='login_wrap'>
  <Login>
  </Login>
  </div>
</div>


  </div>
  
    )
}

export default Home;