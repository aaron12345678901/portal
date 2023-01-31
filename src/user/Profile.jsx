import React, { useState, useEffect } from 'react';
import {Outlet,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/php-react/register-login-php/get.php')
          .then(response => setUserData([response.data]))
          .catch(error => console.error(error));
      }, []);

      return (
        <div className="profile-container">
          <div className="profile-home-head">
            <div className="back-arrow" onClick={() => navigate(-1)}>
              <div className="img-container"></div>
            </div>
            <div className="profile-logo">
              <h2>the</h2>
              <h1>portal</h1>
            </div>
          </div>
      
          <div className="profile-card">
            <div className="profile-img-pat-details">
              <div className="profile-img-container">
                <div className="profile-img"></div>
              </div>
              <div className="profile-name-patnumber">
                {userData.map((data, index) => (
                  <>
                    <p>name:{data.first_name}</p>
                    <p>surname:{data.last_name}</p>
                    <p>patient num:{data.patientnum}</p>
                  </>
                ))}
              </div>
            </div>
      
            <div className="profile-ailment">
              <p>ailment: <br /> a rash of red, itchy spots that turn into fluid-filled blisters They then crust over to form scabs which eventually drop off.</p>
            </div>
      
            <div className="profile-treatment">
              <p>treatment: soda cream </p>
            </div>
      
            <div className="profile-doctor">
              <p>Doctor in charge of treatment : <br /> DR Brown </p>
              <p>WARD: 13B</p>
            </div>
      
            <div className="Appointments-due">
              <p>Appointments due</p>
              <p>Check up :25/09/2022 14.00pm </p>
            </div>
          </div>
      
          <Outlet />
        </div>
      );
                
    }

    export default Profile