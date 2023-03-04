// Importing necessary modules
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

// Defining the Login component
const Login = () => {
  // Initializing a navigation object to redirect to different pages
  let navigate = useNavigate();

  // Initializing a state object with email and password fields
  const [user, setUser] = useState({ email: '', password: '' });

  // A function that updates the user state object when the user inputs data
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // A function that is called when the user submits the login form
  const submitForm = (e) => {
    e.preventDefault();
    // Building a URL with the email and password entered by the user
    const url = `http://localhost/php-react/register-login-php/login.php?email=${user.email}&password=${user.password}`;

    // Sending an HTTP GET request to the URL using axios
    axios.get(url)
      .then((result) => {
        // If the request is successful and the user is not an admin, save user info to local storage and navigate to Home2 page
        if (result.data.Status === '200' && result.data.isadmin == 0) {
          window.localStorage.setItem('email', result.data.email);
          window.localStorage.setItem('userName', (result.data.first_name + ' ' + result.data.first_name ));
          window.localStorage.setItem('id', result.data.id);
          navigate(`/Home2`);
          console.log(result);
        } 

        // If the request is successful and the user is an admin, navigate to Admindash page
        else if(result.data.Status === '200' && result.data.isadmin == 1){
          navigate(`/Admindash`);
          console.log("admin");
        }
        
        // If the request is not successful, display an error message
        else {
          alert('Invalid User');
          console.log(result);
        }
      });
  }

  // Rendering the login form
  return (
    <form onSubmit={submitForm}>
      <div className="login-container">
        <div className="Login_heading">
          <h1>Login</h1>
        </div>

        <div className="Login_text">
          <h2> Email:</h2>
          <div ><input type="email" name="email" onChange={handleChange} value={user.email} /></div>
        </div>

        <div className="Login_text">
          <h2>Password:</h2>
          <div ><input type="password" name="password" onChange={handleChange} value={user.password} /></div>
        </div>

        <div className="Login_btn">
          <input type="submit" name="submit" className="btn btn-success" value="Please Login" />
        </div>
      </div>
    </form>
  )
}

// Exporting the Login component
export default Login;