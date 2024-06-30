import React from "react";
import { Link } from "react-router-dom";
import "../components.css";

function ErrorPage() {
  return (
    <div className="error-page">
      ErrorPage
      <Link to="/">Home</Link>
    </div>
  );
}

export default ErrorPage;
