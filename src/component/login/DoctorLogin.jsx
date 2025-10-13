import React, { useState } from "react";
import { Link } from "react-router-dom";

const DoctorLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState("signin"); // signin ya signup

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }

        setError("");
        console.log(`${activeTab} with:`, { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Mediconeckt</h2>
            
                {/* Sign In / Sign Up buttons */}
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        className={`px-6 py-2 rounded transition ${activeTab === "signin"
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        onClick={() => setActiveTab("signin")}
                    >
                        Sign In
                    </button>

                    <Link
                        to="/register" // yahan Sign Up page ka route
                        className={`px-6 py-2 rounded transition flex items-center justify-center ${activeTab === "signup"
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        onClick={() => setActiveTab("signup")}
                    >
                        Sign Up
                    </Link>
                </div>

                {error && (
                    <div className="bg-red-100 text-red-700 p-2 mb-4 mt-4 rounded">{error}</div>
                )}

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-4 mt-4">
                    <div>
                        <input
                            type="email"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Unique ID / Email / Phone"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                    >
                        {activeTab === "signin" ? "Login" : "Register"}
                    </button>
                </form>

                <p className="text-sm mt-4 text-center">
                    {activeTab === "signin"
                        ? "Don't have an account?"
                        : "Already have an account?"}{" "}
                    <span
                        className="text-blue-600 cursor-pointer"
                        onClick={() =>
                            setActiveTab(activeTab === "signin" ? "signup" : "signin")
                        }
                    >
                        {activeTab === "signin" ? "Register" : "Sign In"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default DoctorLogin;
