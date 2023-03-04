import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logout from "../components/Logout";

const Home2 = () => {
  // two states one to store user data and one to see if data is still loading
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(false);

  // getting id from local storage and converting to a javascript object to be used
  let id = JSON.parse(window.localStorage.getItem("id"));

  // getting users data from server using the id that was retrieved
  useEffect(() => {
    axios
      .post(`http://localhost/php-react/register-login-php/get.php?id=${id}`)

      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
    setloading(true);
  }, []);

  return (
    <div className="container">
      <div className="home-head">
        <div className="logo">
          <h2>the</h2>
          <h1>portal</h1>
        </div>
        <div className="user-id">
          {loading
            ? userData.map((data) => (
                <p>
                  Welcome: {data.first_name} {data.last_name}
                </p>
              ))
            : null}
        </div>

        <div className="logout-btns">
          <Logout></Logout>
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
        <Link to="Treatment">
          <div className="hsecond-link">
            <div className="hsecond-img"></div>
            <div className="hsecond-link-text">
              <p>treatment</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="h-third-links">
        <Link to="Entertainment">
          <div className="hthird-link">
            <div className="hthird-img"></div>
            <div className="hthird-line-text">
              <p>entertainment</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home2;
