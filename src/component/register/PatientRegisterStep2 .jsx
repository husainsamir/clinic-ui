

 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientRegisterStep2 = () => {
  const navigate = useNavigate();
  const [medicalConditions, setMedicalConditions] = useState({
    Diabetes: false,
    Hypertension: false,
    "Heart Disease": false,
    Asthma: false,
    Arthritis: false,
    Thyroid: false,
    "Kidney Disease": false,
    Cancer: false,
    Depression: false,
    Anxiety: false,
  });

  const [allergies, setAllergies] = useState("");
  const [medications, setMedications] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [error, setError] = useState("");

  const handleCheckboxChange = (condition) => {
    setMedicalConditions({
      ...medicalConditions,
      [condition]: !medicalConditions[condition],
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (!emergencyName || !emergencyPhone) {
      setError("Please fill emergency contact details");
      return;
    }

    setError("");
    console.log({
      medicalConditions,
      allergies,
      medications,
      emergencyName,
      emergencyPhone,
    });

    // Navigate to Step 3
    navigate("/patientRegister3");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg mb-8">
          {/* Step Header */}
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Patient Registration - Step 2/3
          </h2>
          <h3 className="text-lg font-semibold mb-6 text-center">Medical History</h3>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
          )}

          <form onSubmit={handleContinue} className="space-y-4">
            <div>
              <p className="font-medium mb-2">Medical Conditions:</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(medicalConditions).map((condition) => (
                  <label key={condition} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={medicalConditions[condition]}
                      onChange={() => handleCheckboxChange(condition)}
                    />
                    {condition}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Known Allergies:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Current Medications:</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                value={medications}
                onChange={(e) => setMedications(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Emergency Contact Name *</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                value={emergencyName}
                onChange={(e) => setEmergencyName(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Emergency Contact Phone *</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                value={emergencyPhone}
                onChange={(e) => setEmergencyPhone(e.target.value)}
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                className="px-6 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
                onClick={() => navigate(-1)} // go back to previous step
              >
                Back
              </button>

              <button
                type="submit"
                className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegisterStep2;
