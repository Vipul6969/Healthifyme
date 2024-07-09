import React from "react";
import "../Styles/Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faPrescriptionBottleAlt, faNotesMedical } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          Experience the convenience of personalized healthcare with our comprehensive on-demand medical services. Through our platform, you can connect with experienced online doctors who provide expert medical advice, issue online prescriptions, and offer quick refills whenever you need them.
        </p>
      </div>
      <div className="info-cards-content">
        <div className="info-card">
          <div className="info-card-icon">
            <FontAwesomeIcon icon={faStethoscope} className="info-fa-icon" />
          </div>
          <h4 className="info-card-title">Expert Medical Advice</h4>
          <p className="info-card-description">
            Connect with our experienced doctors for professional medical advice and consultations.
          </p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">
            <FontAwesomeIcon icon={faPrescriptionBottleAlt} className="info-fa-icon" />
          </div>
          <h4 className="info-card-title">Online Prescriptions</h4>
          <p className="info-card-description">
            Get your prescriptions issued online quickly and conveniently without the need for a physical visit.
          </p>
        </div>
        <div className="info-card">
          <div className="info-card-icon">
            <FontAwesomeIcon icon={faNotesMedical} className="info-fa-icon" />
          </div>
          <h4 className="info-card-title">Quick Refills</h4>
          <p className="info-card-description">
            Request and receive quick refills for your medications with ease through our platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
