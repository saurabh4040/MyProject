import React, { useState } from "react";
import "./Join.css";
import { Link } from "react-router-dom";
import Navbar from '../Navbar.jsx'
import Footer from "../Footer.jsx";

let user;
const senduser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {

  const [name, setName] = useState("");

  return (
    <>
    <Navbar/>
    <div className="JoinPage">
      <img id="videoCall" src="https://i.pinimg.com/564x/28/30/86/283086f0fcb06130cf5eb4c0b27b3545.jpg" alt="Online video call" />
      <div className="JoinContainer">
        <h1>Live Chat</h1>
        <input  onChange={(e) => setName( e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
        <Link to="/chat" onClick={(e) => !name ? e.preventDefault() : null}>
          <button onClick={senduser} className="joinbtn">
            Login In
          </button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Join;
export { user };
