import React, { useState, useEffect } from "react";
import {  Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logout from "../components/Logout";

const Profile = () => {
  
  const navigate = useNavigate();
  // two states one to store user data and one to see if data is still loading
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);
 
 // getting users data from server using the id that was retrieved
  let id = JSON.parse(window.localStorage.getItem("id"));
  

  useEffect(() => {
    axios
      .post(`http://localhost/php-react/register-login-php/get.php?id=${id}`)

      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
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

        <div className="logout-btnsP">
          <Logout></Logout>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-img-pat-details">
          <div className="profile-img-container">
            <div className="profile-img"></div>
            
          </div>
          <div className="profile-name-patnumber">
            {loading
              ? userData.map((data) => (
                  <>
                    <p>name:{data.first_name}</p>
                    <p>surname:{data.last_name}</p>
                    <p>patient num:{data.patientnum}</p>
                  </>
                ))
              : null}
          </div>
        </div>

        <div className="profile-ailment">
          {loading
            ? userData.map((data) => (
                <>
                  <p>
                    ailment: <br /> {data.ailment}
                  </p>
                </>
              ))
            : null}
        </div>

        <div className="profile-treatment">
          {loading
            ? userData.map((data) => (
                <>
                  <p>treatment: {data.treatment} </p>
                </>
              ))
            : null}
        </div>

        <div className="profile-doctor">
          {loading
            ? userData.map((data) => (
                <>
                  <p>Doctor in charge of treatment : {data.doctor} </p>
                </>
              ))
            : null}
          <br />
          {loading
            ? userData.map((data) => (
                <>
                  <p>WARD:{data.ward}</p>
                </>
              ))
            : null}
        </div>

        <div className="Appointments-due">
          <p>Appointments due</p>
          {loading
            ? userData.map((data) => (
                <>
                  <p>{data.Appointments}</p>
                </>
              ))
            : null}
        </div>
      </div>

      <div className="profile-links">
        <Link to="Map">
          <div className="maplink">
            <p>click here to see the hospital layout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
