import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Loader from "../components/Loader"; // Import the Loader component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Patient");
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      let loginEndpoint = "";

      if (role === "Doctor") {
        loginEndpoint = "http://localhost:5000/api/v1/user/doctor/doclogin";
      } else if (role === "Patient") {
        loginEndpoint = "http://localhost:5000/api/v1/user/login";
      }

      const response = await axios.post(
        loginEndpoint,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response && response.data) {
        toast.success(response.data.message);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", role);

        if (role === "Doctor") {
          navigateTo("/docdashboard");
        } else if (role === "Patient") {
          navigateTo("/dashboard");
        }
      } else {
        toast.error("Invalid response received from the server.");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-icon">DOSCHEDULISE</div>
      </div>
      <div className="mainContainer container">
        <div className="image-container">
          <img
            src="https://t4.ftcdn.net/jpg/03/30/33/29/360_F_330332917_MO0x1tcYedbGxUM4wgATwyOkU7xY5wEI.jpg"
            alt="Doctor"
            className="doctor-image"
          />
        </div>
        <div className="form-container">
          {isLoading ? ( 
            <Loader />
          ) : (
            <form className="form" onSubmit={handleLogin}>
              <p className="title">Login</p>
              <p className="message">Login now to access our app.</p>
              <div className="flex">
                <label>
                  <input
                    required
                    placeholder="Email"
                    type="email"
                    className="input"
                    value={email}
                    id="LoginInput"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex">
                <label>
                  <input
                    required
                    placeholder="Password"
                    type="password"
                    className="input"
                    id="LoginInputPass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex">
                <select
                  className="loginInput"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                </select>
              </div>
              <button type="submit" className="submit" id="LoginSubmit">
                Submit
              </button>
              <p className="signin">
                Don't have an account? <Link to="/register">Register now</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
