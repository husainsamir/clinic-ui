import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

const PatientRegister = () => {
  const navigate = useNavigate(); // initialize navigate
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleNextStep = () => {
    // validation for step 1
    if (!fullName || !email || !phone || !password || !confirmPassword || !gender || !age || !dob || !bloodGroup || !address) {
      setError("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    
    // navigate to patientRegister2 route
    navigate("/patientRegister2");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
            Patient Registration - Step 1/3
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
          )}

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Phone" className="w-full border p-2 rounded" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <div className="flex gap-2">
              <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-1/2 border p-2 rounded">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="number" placeholder="Age" className="w-1/2 border p-2 rounded" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <input type="date" placeholder="Date of Birth" className="w-full border p-2 rounded" value={dob} onChange={(e) => setDob(e.target.value)} />
            <input type="text" placeholder="Blood Group" className="w-full border p-2 rounded" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} />
            <textarea placeholder="Address" className="w-full border p-2 rounded" value={address} onChange={(e) => setAddress(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" className="w-full border p-2 rounded" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            
            <button type="button" onClick={handleNextStep} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
