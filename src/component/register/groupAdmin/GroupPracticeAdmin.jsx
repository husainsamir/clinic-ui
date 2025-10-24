

  import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GroupPracticeAdmin = () => {
  const [centerName, setCenterName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate   = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!centerName || !adminName || !email || !phone || !password) {
      setError("Please fill all required fields");
      return;
    }

    const registrationData = { centerName, adminName, email, phone, password };
    console.log("✅ Group Practice Admin Registration:", registrationData);
    alert("Registration Completed! Check console for data.");
    
    // Save to localStorage if needed
    localStorage.setItem("groupPracticeAdmin", JSON.stringify(registrationData));

    // Clear form after submission
    setCenterName("");
    setAdminName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setError("");
  };
    navigate('/groupAdminDocDash')
  return (
    <div className="bg-gray-100 min-h-screen py-8 flex justify-center items-start">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Group Practice Center Registration
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Center/Hospital Name *"
            className="w-full border p-2 rounded"
            value={centerName}
            onChange={(e) => setCenterName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Admin Name *"
            className="w-full border p-2 rounded"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone *"
            className="w-full border p-2 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password *"
            className="w-full border p-2 rounded"
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
      </div>
    </div>
  );
};

export default GroupPracticeAdmin;
