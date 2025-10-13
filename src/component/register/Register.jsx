import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

      

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="flex flex-col items-center justify-center px-4">
                {/* Registration Form */}
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                        I am registering as:
                    </h2>

                    {error && (
                        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
                    )}

                    {/* Patient card link */}
                    <Link to="/patientRegister" className="w-full">
                        <div className="border border-gray-300 p-4 rounded w-full bg-white shadow-sm hover:shadow-md transition cursor-pointer mb-4">
                            <div className="flex items-center gap-4">
                                <h1 className="text-5xl">🤒</h1>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-lg">Patient</span>
                                    <span className="text-gray-500 text-sm">Book Appointment</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Other roles */}
                     <Link to={'/soloPractice'}>
                    <div className="border border-gray-300 p-4 rounded w-full bg-white shadow-sm hover:shadow-md transition mb-4">
                        <div className="flex items-center gap-4">
                            <h1 className="text-5xl">🩺</h1>
                            <div className="flex flex-col">
                                <span className="font-semibold text-lg">Solo Practice Doctor</span>
                                <span className="text-gray-500 text-sm">Independent Practice</span>
                            </div>
                        </div>
                    </div>
                      </Link>

                       {/* multi-doc for */}
                       <Link to={'/'}>
                    <div className="border border-gray-300 p-4 rounded w-full bg-white shadow-sm hover:shadow-md transition mb-4">
                        <div className="flex items-center gap-4">
                            <h1 className="text-5xl">🏥</h1>
                            <div className="flex flex-col">
                                <span className="font-semibold text-lg">MultipleCenter-Doctor</span>
                                <span className="text-gray-500 text-sm">Practice at multiple locations</span>
                            </div>
                        </div>
                    </div>
                      </Link>

                       {/* this is for Group admin */}
                       <Link to={'/'}>
                    <div className="border border-gray-300 p-4 rounded w-full bg-white shadow-sm hover:shadow-md transition mb-4">
                        <div className="flex items-center gap-4">
                            <h1 className="text-5xl">👨‍⚕️</h1>
                            <div className="flex flex-col">
                                <span className="font-semibold text-lg">Group Practice Admin</span>
                                <span className="text-gray-500 text-sm">Manage Centers</span>
                            </div>
                        </div>
                    </div>
                      </Link>
                     

                    <p className="text-sm mt-4 text-center">
                        Already have an account?{" "}
                        <Link to="/" className="text-blue-600 hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>

                {/* Quick Demo Section */}
                <div className="text-gray-700 text-center">
                    <h3 className="text-lg font-semibold mb-2">Quick Demo</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-blue-200 transition">
                            Patient
                        </div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-green-200 transition">
                            Doctor
                        </div>
                        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-purple-200 transition">
                            Multi-center Doctor
                        </div>
                        <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-yellow-200 transition">
                            Admin
                        </div>
                        <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium cursor-pointer hover:bg-pink-200 transition">
                            Kiosk
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
