

  import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientRegister3 = () => {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const avatars = ["👤", "👨", "👩", "🧑", "👨‍💼", "👩‍💼", "🧔", "👴", "👵"];

  const handleCompleteRegistration = () => {
    if (!selectedAvatar) {
      alert("Please select an avatar");
      return;
    }

    // TODO: Call API to complete registration with avatar
    console.log("Selected Avatar:", selectedAvatar);
    alert("Registration Completed!");
    navigate("/patientDash"); // redirect to login or dashboard
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mb-8">
          {/* Step Header */}
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Patient Registration - Step 3/3
          </h2>

          <p className="font-semibold mb-4 text-center">Choose Avatar</p>

          <div className="grid grid-cols-3 gap-4 mb-6 text-4xl text-center">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`cursor-pointer p-4 border rounded transition hover:bg-blue-100 ${
                  selectedAvatar === avatar ? "border-blue-600 bg-blue-200" : "border-gray-300"
                }`}
                onClick={() => setSelectedAvatar(avatar)}
              >
                {avatar}
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition"
            >
              Back
            </button>
            <button
              onClick={handleCompleteRegistration}
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Complete Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister3;
