import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    const url = `http://localhost:8040/php-react/register-login-php/login.php?email=${user.email}&password=${user.password}`;

    axios.get(url)
      .then((result) => {
        if (result.data.Status === '200' && result.data.isadmin == 0) {
          window.localStorage.setItem('email', result.data.email);
          window.localStorage.setItem('userName', (result.data.first_name + ' ' + result.data.first_name ));
          window.localStorage.setItem('id', result.data.id);
          navigate(`/Home2`);
          console.log(result);
        } 

        else if(result.data.Status === '200' && result.data.isadmin == 1){
          navigate(`/Admindash`);
          console.log("admin");
        }
        
        else {
          alert('Invalid User');
          console.log(result);
        }
      });
  }

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
         
            <input type="submit" name="submit" className="btn btn-success" value="Plese Login" />
          
           
        </div>
        </div>
        </form>
    )
}

export default Login;