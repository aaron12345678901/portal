import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//The useState hook returns an array with two elements: the current state value and a function that updates the value
const Register=()=>{
  let history = useNavigate();
  const[data, setData]=useState({
    first_name:"",
    last_name:"",
    Email:"",
    Password:""
  })

  //The handleChange function is an event handler that is passed to the onChange event of each input field. It updates the state value of the corresponding field with the value of the input field
  const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: e.target.value});

    //console.log(data)
  }

//function to send data 
const submitForm = (e) => {
  e.preventDefault();

  const params = new URLSearchParams();
  params.append('first_name', data.first_name);
  params.append('last_name', data.last_name);
  params.append('email', data.Email);
  params.append('password', data.Password);

  axios.get('http://localhost/php-react/register-login-php/insert.php', { params })
    .then((result) => {
      if (result.data.status == 'invalid') {
        alert('invalid user');
      } else {
        history('/Home2')
      }
    })
}



// need to install axios
// file path to xammp php file
    // make sure to add https in path 



    return(
  <div className="main-box">

    {/* form encloses full sections with data to be sent */}
    <form onSubmit={submitForm}>
        <div className="row">
        <div className="col-md-12 text-center"><h1> Register</h1></div>
        </div>
    <div className="row">
          <div className="col-md-6">First name</div>
          <div className="col-md-6">
            <input type="text" name ="first_name" className="form-control"
            onChange={handleChange} value={data.first_name} />
        </div>
    </div>

    <div className="row">
          <div className="col-md-6">Last name</div>
          <div className="col-md-6">
            <input type="text" name ="last_name" className="form-control"
            onChange={handleChange} value={data.last_name} />
        </div>
    </div>

    <div className="row">
          <div className="col-md-6">Email</div>
          <div className="col-md-6">
            <input type="email" name ="Email" className="form-control"
            onChange={handleChange} value={data.Email} />
        </div>
    </div>

    <div className="row">
          <div className="col-md-6">Password</div>
          <div className="col-md-6">
            <input type="Password" name ="Password" className="form-control"
            onChange={handleChange} value={data.Password} />
        </div>
    </div>

    <div className="row">
          <div className="col-md-12 text-cener">
            <input type="submit" name ="submit" value="Register" className="btn btn-success"/>
        </div>
    </div>

    </form>
  </div>
    )
}
export default Register;