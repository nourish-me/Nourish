import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Nourish: Your Personalized Healthcare Companion </span>
        </h3>
        <p className="about-description">
          Welcome to Nourish, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Interactive Health Coaching App"
          description="Develop an interactive mobile application that serves as a personalized healthcare companion, offering features such as symptom checking, medication management, nutritional guidance, and mental health support. The app will leverage AI algorithms to provide tailored recommendations and insights based on user data, empowering individuals to take charge of their health journey."
        />

        <SolutionStep
          title="Wearable Health Monitoring System"
          description="Design a wearable health monitoring system that integrates seamlessly with the Nourish platform, allowing users to track vital signs, physical activity, sleep patterns, and more in real-time. The system will provide users with personalized feedback and alerts, enabling proactive health management and early intervention when necessary."
        />

        <SolutionStep
          title="Telemedicine Platform Integration"
          description="Implement a telemedicine platform within the Nourish ecosystem, enabling users to schedule online consultations with medical specialists directly through the companion app. This integration will enhance healthcare accessibility and convenience, allowing users to receive prompt diagnosis, treatment, and ongoing support from healthcare professionals, regardless of their location."
        />
      </div>
    </div>
  );
}

export default About;
