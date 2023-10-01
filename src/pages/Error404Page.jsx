import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/error404.css";
import errorImage from "../images/error404.png";

export default function Error404Page() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="centered-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oop, this page cannot be found!</p>
        <img src={errorImage} alt="img" />
        <div className="button-container">
          <button className="mui-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
          {/* You can add a button for going to the home page here */}
        </div>
      </div>
    </div>
  );
}
