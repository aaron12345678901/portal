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
    const url = `http://localhost/php-react/register-login-php/login.php?email=${user.email}&password=${user.password}`;

    axios.get(url)
      .then((result) => {
        if (result.data.Status === '200') {
          window.localStorage.setItem('email', result.data.email);
          window.localStorage.setItem('userName', (result.data.first_name + ' ' + result.data.first_name ));
          navigate(`/Home2`);
          console.log(result);
        } else {
          alert('Invalid User');
          console.log(result);
        }
      });
  }

  return (
    <form onSubmit={submitForm}>
      <div className="main-box">
        <div className="row">
          <div className="col-md-12 text-center"> <h1>Login Page</h1></div>
        </div>
        <div className="row">
          <div className="col-md-6">Email:</div>
          <div className="col-md-6"><input type="email" name="email" onChange={handleChange} value={user.email} /></div>
        </div>
        <div className="row">
          <div className="col-md-6">Password:</div>
          <div className="col-md-6"><input type="password" name="password" onChange={handleChange} value={user.password} /></div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <input type="submit" name="submit" className="btn btn-success" value="Plese Login" />
           </div>
           
        </div>
        </div>
        </form>
    )
}

export default Login;