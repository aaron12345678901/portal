import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./scss/app.css";
//import Home from "./components/Home";
import Home2 from "./user/Home2";
import Profile from "./user/Profile";
// import Login from "./components/Login";
//import Register from "../components/Register";
//import Counter from "./components/Counter";
import Entertainment from "./user/Entertainement";


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
			<Routes>
				<Route path="/" element={<Home2 />}>
					<Route
						index
						element={<Home2 />}
					/>
					<Route
						path="Profile"
						element={
							<Profile />
						}
					/>
					<Route
						path="Entertainement"
						element={
							<Entertainment />
						}
					/>
					
				</Route>
			</Routes>
		</BrowserRouter>
  
    
    
    </div>
  );
}

export default App;
