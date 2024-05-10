import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./DocDashboard.css"; 
import Navbar from "./Navbar";

const DocDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const name = localStorage.getItem("firstName");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/appointment/getall`
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
        toast.error("Failed to fetch appointments.");
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/appointment/update/${appointmentId}`,
        { status }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar/>
      <h1 className="welcomeh1">Welcome to the dashboard, Doctor <strong>{name}</strong></h1>
      <section className="doc-dashboard">
        <div className="dashboard-header">
          <div className="dashboard-stats">
            <h2>Total Appointments: {appointments.length}</h2>
            {/* Additional stat boxes for other statistics */}
          </div>
        </div>
        <div className="dashboard-content">
          <h2>Appointments</h2>
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                    <td>{appointment.appointment_date.substring(0, 16)}</td>
                    <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                    <td>{appointment.department}</td>
                    <td>
                      <select
                        className={`status-select ${
                          appointment.status.toLowerCase()
                        }`}
                        value={appointment.status}
                        onChange={(e) =>
                          handleUpdateStatus(appointment._id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td>
                      {appointment.hasVisited ? "Available" : "Not available"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Appointments Found!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DocDashboard;
