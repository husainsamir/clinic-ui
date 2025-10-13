
 
 import React from "react";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: clear auth/session data
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded shadow">
        <div className="flex items-center gap-4">
          <div className="text-4xl">👤</div>
          <div className="font-semibold">PAT-USE-258897</div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Overview / Personal Info */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">Overview</h3>
          <div className="space-y-2">
            <p><strong>Age:</strong> 28</p>
            <p><strong>Blood Group:</strong> O+</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> patient@example.com</p>
          </div>
        </div>

        {/* Medical Records */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">Medical Records</h3>
          <p>All your past records and reports.</p>
        </div>

        {/* Book Appointment */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">Book Appointment</h3>
          <p>Schedule with doctors.</p>
        </div>

        {/* Video Consult */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">Video Consult</h3>
          <p>Connect remotely with doctors.</p>
        </div>

        {/* Health Score */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">Health Score</h3>
          <div className="text-2xl font-bold mb-1">85</div>
          <div className="text-green-600 font-medium">Good Health</div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
 