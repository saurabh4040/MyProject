import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx"
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile.jsx";
import Join from "./components/Join/Join.jsx";
import Chat from "./components/Chat/Chat.jsx";
import DocDashboard from "./components/DoctorsDashboard.jsx";
import Doctor from "./Pages/Doctor.jsx";
import AppointmentConfirm from "./components/AppointmentConfirm.jsx";
import ContactMe from "./components/ContactMe.jsx";


const App = () => {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="docdashboard" element={<DocDashboard/>}/>
          <Route path="/appointment/thankyou" element={<AppointmentConfirm/>}/>
          <Route path="/doctors" element={<Doctor/>}/>
          <Route path="/contactme" element={<ContactMe/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route exact path="/join" element={<Join/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
        <ToastContainer position="top-right" />
      </Router>
    </>
  );
};

export default App;