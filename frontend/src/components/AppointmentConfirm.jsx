import React from 'react';
import Lottie from 'lottie-react';
import {useNavigate} from 'react-router-dom'
import Animation from '../../public/assets/Confirm/Animation - 1715284637865.json';
import "./Confirm.css";

const AppointmentConfirm = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    }

  return (
    <div className="confirmation-container">
      <div className="animation-container">
        <Lottie animationData={Animation} className='animateImage' />
      </div>
      <div className="message-container">
        <h1 className="confirmation-message">
          Your appointment has been successfully booked!
        </h1>
        <p className="confirmation-text">
          Thank you for choosing our services. We look forward to seeing you at your appointment. Please make sure to visit your doctor on time. If you have any questions or need assistance, feel free to contact us. Your health is our priority!
        </p>
      </div>
      <div className="button-container">
        <button className="return-button" onClick={handleClick}>Return Home</button>
      </div>
    </div>
  );
};

export default AppointmentConfirm;
