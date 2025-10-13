import React, { useState } from "react";

const PatientCard = ({ patient }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full animate-fade-in">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">
        Patient Details
      </h3>
      <p><strong>Name:</strong> {patient.name}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Phone:</strong> {patient.phone}</p>
      <p><strong>Symptoms:</strong> {patient.symptoms}</p>
    </div>
  );
};

const ClinicAnimation = () => {
  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState(null);

  const handleScan = () => {
    setLoading(true);
    setTimeout(() => {
      setPatient({
        name: "Rashmi Singh",
        age: 28,
        phone: "9876543210",
        symptoms: "Fever, Cough"
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Clinic App - Patient Check-in</h2>

      {!patient && (
        <button
          onClick={handleScan}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Scan Patient QR
        </button>
      )}

      {loading && (
        <div className="mt-6 w-64 h-32 bg-gray-200 rounded-xl animate-pulse"></div>
      )}

      {patient && <PatientCard patient={patient} />}
    </div>
  );
};

export default ClinicAnimation;
