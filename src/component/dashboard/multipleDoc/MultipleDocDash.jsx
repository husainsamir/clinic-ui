
 
 import React from "react";
import { useNavigate } from "react-router-dom";

const MultipleDocDash = () => {
  const navigate = useNavigate();

  // Fetch doctor data from localStorage
  const doctorData = JSON.parse(localStorage.getItem("doctorData")) || {};

  const handleLogout = () => {
    localStorage.removeItem("doctorData");
    navigate("/"); // redirect to login/home
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded shadow">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{doctorData.avatar || "👨‍⚕️"}</div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{doctorData.fullName || "Dr. Name"}</span>
            <span className="text-sm text-gray-500">📍 Multi-Center Practice</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
          <span className="font-semibold text-gray-500">Today's Appointments</span>
          <span className="text-2xl font-bold mt-2">12</span>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
          <span className="font-semibold text-gray-500">My Staff</span>
          <span className="text-2xl font-bold mt-2">0</span>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
          <span className="font-semibold text-gray-500">Completed</span>
          <span className="text-2xl font-bold mt-2">45</span>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center">
          <span className="font-semibold text-gray-500">Rating</span>
          <span className="text-2xl font-bold mt-2">4.8</span>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overview / Personal Info */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">Overview</h3>
          <div className="space-y-2">
            <p><strong>Email:</strong> {doctorData.email || "doctor@example.com"}</p>
            <p><strong>Phone:</strong> {doctorData.phone || "+91 9876543210"}</p>
            <p><strong>Specialty:</strong> {doctorData.specialty || "Cardiology"}</p>
            <p><strong>Practice Locations:</strong></p>
            <ul className="list-disc list-inside ml-4">
              {doctorData.locations?.map((loc, index) => (
                <li key={index}>
                  <span className="font-medium">{loc.clinicName}</span> - {loc.address} <br/>
                  <span className="text-sm text-gray-500">Available: {loc.availableDays.join(", ")}</span>
                </li>
              )) || <li>No locations added</li>}
            </ul>
          </div>
        </div>

        {/* Schedule / Appointments */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-lg mb-4">Schedule & Availability</h3>
          <p className="text-gray-500 mb-4">Your weekly schedule across all practice locations.</p>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
              <div key={day} className="bg-blue-100 p-2 rounded">{day}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleDocDash;
