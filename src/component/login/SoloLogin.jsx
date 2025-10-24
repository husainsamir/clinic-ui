import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SoloLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState("login"); 
  const [otp, setOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [otpMessage, setOtpMessage] = useState(""); // OTP message for frontend demo
  
    
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    const doctors = JSON.parse(localStorage.getItem("soloDoctors"));

    const doctor = doctors.find(
      (doc) => doc.email === email && doc.password === password
    );

    if (doctor) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000); 
    //   console.log(generatedOtp)
      setOtp(generatedOtp);
      setCurrentDoctor(doctor);
       
      setStep("otp");
      setEnteredOtp("");
      setError("");
      setOtpMessage(`Your OTP is: ${generatedOtp}`); 
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };
    
    
  const handleVerifyOtp = (e) => {
    e.preventDefault();
      console.log("enter otp ",enteredOtp)
    if (parseInt(enteredOtp) === otp) {
      
      alert(`Welcome back, Dr. ${currentDoctor.fullName}!`);
      navigate("/solodocDash");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {step === "login" && (
          <>
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Solo Practice Doctor Login
            </h2>

            {error && (
              <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email *"
                className="w-full border border-gray-300 p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                Login
              </button>
              <Link to="/solopractice">
                <div className="text-blue-800 text-center cursor-pointer">
                  Signup
                </div>
              </Link>
            </form>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Enter OTP
            </h2>

            {otpMessage && (
              <div className="bg-yellow-100 text-yellow-700 p-2 mb-4 rounded">
                {otpMessage} 
              </div>
            )}

            {error && (
              <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="number"
                placeholder="Enter OTP"
                className="w-full border border-gray-300 p-2 rounded"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
              >
                Verify OTP
              </button>

            </form>

          </>
        )}
      </div>
    </div>
  );
};

export default SoloLogin;
