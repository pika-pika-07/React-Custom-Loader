import React from "react";
import { useNavigate } from "react-router";
import "../DashboardBody.css";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <button
        onClick={() => {
          navigate("/loader?type=1 ");
        }}
        className="loader-btn"
      >
        Configuration 1 Loader
      </button>
      <button
        onClick={() => {
          navigate("/loader?type=2 ");
        }}
        className="loader-btn"
        className="loader-btn"
      >
        Configuration 2 Loader{" "}
      </button>
    </div>
  );
};

export default Dashboard;
