import "./css/app.css";
//import Login from "./components/Login";
//import Register from "./components/Register";
import Hello from "./components/Hello";
import Goodbye from "./components/Goodbye";
import Hello2 from "./components/Hello2";


//const signupModal = document.querySelector(".signup-form-wrapper");
//const loginModal = document.querySelector(".login-form-wrapper");
//const signupBtn = document.querySelector(".signup-btn");
//const loginBtn = document.querySelector(".login-btn");
//const signupX = document.querySelector(".signup-x");
//const loginX = document.querySelector(".login-x");
//const formContainer = document.querySelector(".form-container");

//signupBtn.addEventListener("click", () => {
  //signupModal.classList.add("display");
  //formContainer.classList.add("disable");
//});

//loginBtn.addEventListener("click", () => {
  //loginModal.classList.add("display");
  //formContainer.classList.add("disable");
//});

//signupX.addEventListener("click", () => {
  //signupModal.classList.remove("display");
  //formContainer.classList.remove("disable");
//});

//loginX.addEventListener("click", () => {
  //loginModal.classList.remove("display");
  //formContainer.classList.remove("disable");
//});
//

function App() {
  return (
    <div className="App">
     <Hello>
         <Goodbye />

     </Hello>


     <Hello2 />
     
     
     
     
     
     
     
     
     
     
     
     
     
     {/* <Hello>
      <Goodbye />
     </Hello> */}






      {/* <div class="container">
        <div class="banner-text">
          <h1>WELCOME TO CLYDE CHILDRENS HOSPITAL</h1>
          <p>LOGIN OR REGISTER TO ENTER THE HOSPITAL PORTAL</p>
        </div>
        <div class="btns">
          <button class="btn login-btn">Login</button>
          <button class="btn signup-btn">Register</button>
        </div>
        <div class="form-container">
          {sign up}
          <Login />
          { login container }
          <Register />
        </div>
      </div> */}
    </div>
  );
}

export default App;
