import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

const Home = () => {
///////register////////



  return (
    <div className='home-page'>


  <Register>

  </Register>

  <Login>

  </Login>
  </div>
  
    )
}

export default Home;