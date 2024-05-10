import React, {useState, useEffect} from 'react';
import "./Dashboard.css"
import Navbar from './Navbar';
import axios from 'axios'
import Footer from './Footer';


const Dashboard = () => {

  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/v1/user/doctor/all');
        setDoctors(data.doctors);
      } catch (error) {
        console.error("Error in fetching doctors", error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/v1/appointment/getall");
        setAppointments(data.appointments);
      } catch (error) {
        console.error("Error in fetching appointments", error);
      }
    };

    fetchAppointments();
  }, []);



  return (
    <>

    <Navbar/>
      <section className="main_custom">
        <div className="main-top_custom">
          <p>Welcome to DoSchedulise Dashboard!</p>
          
        </div>
        <div className="main-body_custom">
       
          <h1>Recent Appointments</h1>

          <div className="row_custom">
            <p>You have <span>{appointments.length}</span> upcoming Appointments</p>
          </div>

           {appointments.map(appointment => (
            <div key={appointment._id} className="mission_card_custom">
              <div className="mission_details_custom">
                <div className="img_custom text-[#3fbbc0]">
                  <i className="fas fa-user-md "></i>
                </div>
                <div className="text_custom">
                  <h2>{appointment.firstName} {appointment.lastName}</h2>
                  <span>Department: {appointment.department}</span>
                  <br/>
                  <span>Address: {appointment.address}</span>
                </div>
              </div>
              <div className="mission_time_custom">
                <h4>Appointment Date: {appointment.appointment_date}</h4>
                <h4>Doctor: {appointment.doctor.firstName} {appointment.doctor.lastName}</h4>
                <span>Status: {appointment.status}</span>
                
              </div>
            </div>
          ))}

        </div>
      </section>
      <Footer/>
      </>
  );
};

export default Dashboard;
