import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="text-section">
          <h2 className="text-title">Find Your Doctor Here</h2>
          <p className="text-description">
            Get medical advice, prescriptions, refills, and notes from online
            doctors within minutes. On-demand healthcare at your fingertips.
          </p>
        </div>
        <div className="image-section">
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </div>
      </div>
      {goUp && (
        <div className="scroll-up" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      )}
    </div>
  );
}

export default Hero;
