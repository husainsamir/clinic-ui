
 // OtpLogin.jsx
import React, { useState } from "react";

const OtpLogin = () => {
  const [step, setStep] = useState("login"); // login / verify
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill both fields");
      return;
    }

    // simulate OTP generation
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(generatedOtp);
    alert(`Your OTP is: ${generatedOtp}`); // simulate sending via email/SMS
    setStep("verify");
    setError("");
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (parseInt(enteredOtp) === otp) {
      alert("Login Successful! 🎉");
      setStep("login"); // reset step if needed
      setEmail("");
      setPassword("");
      setEnteredOtp("");
      setOtp(null);
    } else {
      setError("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {step === "login" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>
          </>
        )}

        {step === "verify" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleVerify} className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
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

export default OtpLogin;
