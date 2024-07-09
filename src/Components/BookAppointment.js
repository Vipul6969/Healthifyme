import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose HealthifyMe?</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose HealthifyMe for your healthcare needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.
        </p>

        <div className="ba-checks">
          <p><FontAwesomeIcon icon={faCircleCheck} className="ba-icon" /> Best Professional Doctors</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className="ba-icon" /> Emergency Care</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className="ba-icon" /> 24/7 Support Live Chat</p>
          <p><FontAwesomeIcon icon={faCircleCheck} className="ba-icon" /> Enrollment Easy and Quick</p>
        </div>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
