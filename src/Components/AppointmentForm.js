import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    console.log("step1");
    e.preventDefault();
    console.log("stepo2");

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!email) {
      errors.email = "Please enter appropriate email";
    }
    // if (!appointmentTime) {
    //   errors.appointmentTime = "Appointment time is required";
    // } else {
    //   const selectedTime = new Date(appointmentTime).getTime();
    //   const currentTime = new Date().getTime();
    //   if (selectedTime <= currentTime) {
    //     errors.appointmentTime = "Please select a future appointment time";
    //   }
    // }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    // if (Object.keys(errors).length > 0) {
    //   setFormErrors(errors);
    //   return;
    // }
    console.log("step3");

    // Send email
    const templateParams = {
      patient_name: patientName,
      patient_email: email,
      doctor_contact: "+9999999999",
      doctor_email: "doc.appoint@yahoo.com",
    };
    console.log("Preparing to send email with templateParams:", templateParams);
    console.log("step2");
    emailjs
      .send(
        "service_1bluqwh",
        "template_97m6ydu",
        templateParams,
        "Vw-xOWwGHW66npyRa"
      )
      .then(
        (response) => {
          console.log("step2");
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Appointment Scheduled!", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsSubmitted(true),
            onClose: () => setIsSubmitted(false),
          });
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to schedule appointment. Please try again.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
    // Reset form fields and errors after successful submission
    setPatientName("");
    setEmail("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <div className="form-container">
        <div>
          <button
           className=""
          >
            Go Back
          </button>
        </div>
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />
          <label>
            Patient Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {/* {formErrors.appointmentTime && (
              <p className="error-message">{formErrors.appointmentTime}</p>
            )} */}
          </label>

          <br />

          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Appointment details have been sent to the patient's phone number via
            SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2024 HealthifyMe. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
