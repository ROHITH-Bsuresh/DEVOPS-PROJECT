import React, { useState, useEffect } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [ageResult, setAgeResult] = useState("");
  const [message, setMessage] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("calculator-container")?.classList.add("fade-in");
    }, 100);
  }, []);

  const calculateAge = () => {
    if (name.trim() === "" || dob === "") {
      alert("Please enter your name and select your date of birth!");
      return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeResult(`Hello ${name}, you are ${years} years, ${months} months, and ${days} days old.`);
    setMessage(`Make the most of your time, ${name}! Each year brings new experiences and opportunities. Keep growing and enjoying life! 🎉`);
    setShowResults(true);
  };

  return (
    <div id="calculator-container" className="age-calculator-container fade-in">
      <div className="header">
        <h2>
          <i className="fas fa-clock"></i> Age Calculator
        </h2>
        <p>Discover your exact age in years, months, and days</p>
      </div>

      <div className="form-container">
        <div className="input-group">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Date of Birth</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>

        <button className="calculate-btn" onClick={calculateAge}>
          Calculate Age
        </button>

        {showResults && (
          <div className="results-section slide-down">
            <h3 className="fade-in-up">{ageResult}</h3>
            <p className="fade-in-up-delay">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
