import React, { useState, useEffect } from "react";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import Treatmentvid from "../components/Treatmentvid";
import axios from "axios";

const Treatment = () => {
  const navigate = useNavigate();
  // two states one to store user data and one to see if data is still loading
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);

  // getting users data from server using the id that was retrieved
  let id = JSON.parse(window.localStorage.getItem("id"));

  useEffect(() => {
    axios
      .post(
        `http://localhost/php-react/register-login-php/treatvid.php?id=${id}`
      )

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

      <div className="Treatmeant-card">
        <div className="vid-container">
          {loading
            ? userData.map((data) => <Treatmentvid vid={data.vidcode} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default Treatment;
