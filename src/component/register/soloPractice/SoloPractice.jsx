import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SoloPractice = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const avatars = ["👨‍⚕️", "👩‍⚕️", "🧑‍⚕️", "👨‍🔬", "👩‍🔬"];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      
    // Validate all fields
    if (!selectedAvatar || !fullName || !email || !phone || !specialty || !license || !password) {
      setError("Please fill all fields and choose an avatar");
      return;
    }

    // Get existing doctors
    const existingDoctors = JSON.parse(localStorage.getItem("soloDoctors")) || [];

    // Check duplicate email
    const emailExists = existingDoctors.some((doc) => doc.email === email);
    if (emailExists) {
      setError("Email already registered. Please use another email or login.");
      return;
    }

    // Create new doctor object
    const newDoctor = {
      avatar: selectedAvatar,
      fullName,
      email,
      phone,
      specialty,
      license,
      password,
    };

    // Save in localStorage
    const updatedDoctors = [...existingDoctors, newDoctor];
    localStorage.setItem("soloDoctors", JSON.stringify(updatedDoctors));

    // Clear error
    setError("");

    // Navigate to dashboard after small delay (to avoid alert blocking)
    alert("Doctor registration successful!");
     navigate("/solodocDash")
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4">
         <button
        onClick={() => navigate(-1)} // goes back to previous page
        className="absolute top-6 left-6 bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 transition"
      >
        ← Back
      </button>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Solo Practice Doctor Registration
        </h2>

        {/* Avatar selection */}
        <div className="mb-6">
          <h3 className="text-center font-semibold mb-3">Choose Your Avatar</h3>
          <div className="flex justify-center flex-wrap gap-4">
            {avatars.map((icon, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedAvatar(icon)}
                className={`text-4xl p-3 rounded-full transition-all duration-200 
                  ${selectedAvatar === icon
                    ? "ring-4 ring-blue-500 bg-blue-100 scale-110"
                    : "hover:bg-gray-100"
                  }`}
              >
                {icon}
              </button>
            ))}
          </div>

          {selectedAvatar && (
            <p className="text-center mt-3 text-sm text-gray-600">
              Selected Avatar: <span className="text-2xl">{selectedAvatar}</span>
            </p>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {error}
          </div>
        )}

        {/* Registration form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full border border-gray-300 p-2 rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email *"
            className="w-full border border-gray-300 p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone *"
            className="w-full border border-gray-300 p-2 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            className="w-full border border-gray-300 p-2 rounded"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Select Specialty *</option>
            <option value="General Physician">General Physician</option>
            <option value="Dentist">Dentist</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </select>

          <input
            type="text"
            placeholder="Medical License Number *"
            className="w-full border border-gray-300 p-2 rounded"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password *"
            className="w-full border border-gray-300 p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Complete Registration
          </button>
        </form>

        <div className="text-center mt-2">
          <Link to="/soloLogin" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoloPractice;
