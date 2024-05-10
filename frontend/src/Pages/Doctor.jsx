import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import doctorImage1 from "../../public/assets/img/doctors/doctors-1.jpg";
import doctorImage2 from "../../public/assets/img/doctors/doctors-2.jpg";
import doctorImage3 from "../../public/assets/img/doctors/doctors-3.jpg";
import doctorImage4 from "../../public/assets/img/doctors/doctors-4.jpg";
import "./Doctor.css";
import Footer from "../components/Footer"

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/user/doctor/all"
        );
        setDoctors(data.doctors);
      } catch (error) {
        console.error("Error in fetching doctors", error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2 className="doctorText mb-5">Our Dedicated Team of Healthcare Experts</h2> 
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-6">
            {doctors.map((doctor, index) => (
              <div key={doctor._id} className="col mb-5">
                <div className="card " >
                  <img
                    src={getDoctorImage(index)}
                    className="card-img-top"
                    alt="Doctor"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center mb-3">
                      {doctor.firstName} {doctor.lastName}
                    </h5>
                    <p className="card-text "> Email: {doctor.email}</p>
                    <p className="card-text "> Department: {doctor.doctorDepartment}</p>
                    <p className="card-text">{doctor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Doctor;

const getDoctorImage = (index) => {
  switch (index) {
    case 0:
      return doctorImage1;
    case 1:
      return doctorImage2;
    case 2:
      return doctorImage3;
    case 3:
      return doctorImage4;
    default:
      return "";
  }
};
