import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.css";
import Home2 from "./user/Home2";
import Profile from "./user/Profile";
import Counter from "./components/Counter";
import Entertainment from "./user/Entertainement";
import Home from "./components/Home";
import Map from "./user/Map";
import Admindash from "./user/Admindash";
import Details from "./user/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="/" element={<Home />} />

          <Route path="/Admindash" element={<Admindash />} />
		  <Route path="/Details:id" element={<Details />} />

          <Route path="/Home2" element={<Home2 />} />
          <Route path="/Home2/Profile" element={<Profile />} />

          <Route path="/Home2/Profile/Map" element={<Map />} />

          <Route path="/Home2/Entertainment" element={<Entertainment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
