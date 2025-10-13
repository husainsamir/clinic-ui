import React, { useState } from "react";

import axios from "axios";

const DoctorDashboard = () => {
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState("");

  const handleScan = async (data) => {
    if (data) {
      setPatientId(data);
      try {
        const res = await axios.get(`http://localhost:5000/api/patient/${data}`);
        setPatientData(res.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Patient not found or API error");
        setPatientData(null);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError("QR Scan error: " + err.message);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Doctor Dashboard</h2>

      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-2">Scan Patient QR</h3>

        <QrReader
          delay={300}
          style={{ width: "100%" }}
          onError={handleError}
          onScan={handleScan}
        />

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {patientData && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-inner">
            <h4 className="font-semibold text-blue-600 mb-2">Patient Details</h4>
            <p><strong>Name:</strong> {patientData.name}</p>
            <p><strong>Age:</strong> {patientData.age}</p>
            <p><strong>Phone:</strong> {patientData.phone}</p>
            <p><strong>Symptoms:</strong> {patientData.symptoms}</p>
            <p><strong>Patient ID:</strong> {patientId}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;
