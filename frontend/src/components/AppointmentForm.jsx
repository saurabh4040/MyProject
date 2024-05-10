import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "../components/Loader"; // Import the Loader component

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctor, setDoctor] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/user/doctor/all"
        );
        setDoctors(data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate, 
          department,
          doctor_firstName: doctor.split(' ')[0], 
          doctor_lastName: doctor.split(' ')[1],
          address,
          hasVisited,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      navigate("/appointment/thankyou");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <>
      <Navbar />
      {isLoading && <Loader />} 
      <div className="mainContainer container">
        <div className="textContainer">
          <h1 className="maintitle">Book Your Appointment Now</h1>
          <p className="subtitle">
            Please fill out the form below to schedule an appointment with our
            doctors.
          </p>
        </div>
        <div className="appointment-form-container container">
          <form onSubmit={handleAppointment} className="appointment-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
            <input
              type="Number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              required
            />
            <input
              type="Number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="form-control"
              required
            />
            <input
              type="date"
              placeholder={dob ? "" : "Date of Birth"}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="form-control"
              required
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-control"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="form-control"
              required
            />
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="form-control"
              required
            >
              <option value="">Select Department</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
            </select>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="form-control"
              required
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor.doctorDepartment === department)
                .map((doctor, index) => (
                  <option
                    key={index}
                    value={`${doctor.firstName} ${doctor.lastName}`}
                  >
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
            </select>
            <textarea
              rows="5"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              required
            />
            <div className="form-group">
              <label>
                Have you visited before?
                <input
                  type="checkbox"
                  checked={hasVisited}
                  onChange={(e) => setHasVisited(e.target.checked)}
                />
              </label>
            </div>
            <button type="submit" className="btn-submit">
              GET APPOINTMENT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppointmentForm;
