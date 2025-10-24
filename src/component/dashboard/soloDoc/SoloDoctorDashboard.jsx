import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SoloDoctorDashboard = () => {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const storedDoctor = JSON.parse(localStorage.getItem("soloDoctors"));

    if (!storedDoctor) {
      // agar doctor ka data nahi hai → registration page pe bhejo
      navigate("/solopractice");
    } else {
      setDoctor(storedDoctor);
    }
  }, []);

    console.log(doctor)

  const handleLogout = () => {
    localStorage.removeItem("soloDoctors");
    navigate("/solopractice");
  };

  if (!doctor) return null; // wait until doctor data load ho

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
         <button
        onClick={() => navigate(-1)} // goes back to previous page
        className="absolute top-6 left-6 bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 transition"
      >
        ← Back
      </button>
      {/* Header */}
      <div className="w-11/12 md:w-3/4 bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Left Section */}
        <div className="flex items-center justify-center sm:justify-start gap-3">
          <span className="text-5xl">{doctor.avatar}</span>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
            {doctor.fullName}'s Dashboard
          </h1>
        </div>

        {/* Right Section (Logout) */}
        <div className="flex justify-center sm:justify-end">
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="w-11/12 md:w-3/4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Overview</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
            <h3 className="text-gray-600">Today's Appointments</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">12</p>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
            <h3 className="text-gray-600">My Staff</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">0</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center">
            <h3 className="text-gray-600">Completed</h3>
            <p className="text-2xl font-bold text-yellow-600 mt-2">45</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg text-center">
            <h3 className="text-gray-600">Rating</h3>
            <p className="text-2xl font-bold text-purple-600 mt-2">4.8 ⭐</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-11/12 md:w-3/4 mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">My Staff & Schedule</h2>
        <p className="text-gray-500">
          Specialty: {doctor.specialty}
        </p>
        <p className="text-gray-500 mt-2">
          Manage your staff members and set your availability for appointments.
        </p>
      </div>
    </div>
  );
};

export default SoloDoctorDashboard;
