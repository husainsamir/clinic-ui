
  import React from "react";
import { useNavigate } from "react-router-dom";

const GroupPracticeAdminDocDash = () => {

  // Dummy data, aap API/localStorage se bhi fetch kar sakte ho
  const stats = {
    doctors: 7,
    staff: 4,
    onLeave: 1,
    patientsToday: 156
  };
  const navigate   =  useNavigate()
  const handleLogout = () => {
     navigate('/')
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded shadow">
        <div>
          <h1 className="text-2xl font-bold">Medical Center</h1>
          <p className="text-gray-600">Administrator</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Navigation / Menu */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Overview</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Doctors</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Staff</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">Leave</button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Doctors</h3>
          <div className="text-3xl font-bold">{stats.doctors}</div>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Staff</h3>
          <div className="text-3xl font-bold">{stats.staff}</div>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="font-semibold text-lg mb-2">On Leave</h3>
          <div className="text-3xl font-bold">{stats.onLeave}</div>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Patients Today</h3>
          <div className="text-3xl font-bold">{stats.patientsToday}</div>
        </div>
      </div>
    </div>
  );
};

export default GroupPracticeAdminDocDash;
