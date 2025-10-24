import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MultipleCenter = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [password, setPassword] = useState("");
  const [locations, setLocations] = useState([
    { clinicName: "", address: "", availableDays: [] },
  ]);
  const navigate    =  useNavigate()
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [error, setError] = useState("");

  const specialties = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const avatars = ["👨‍⚕️", "👩‍⚕️", "🧑‍⚕️", "👨‍🔬", "👩‍🔬", "🧔", "👴", "👵"];

  const handleAddLocation = () => {
    setLocations([...locations, { clinicName: "", address: "", availableDays: [] }]);
  };

  const handleLocationChange = (index, field, value) => {
    const newLocations = [...locations];
    newLocations[index][field] = value;
    setLocations(newLocations);
  };

  const handleDayToggle = (index, day) => {
    const newLocations = [...locations];
    const locDays = newLocations[index].availableDays;
    if (locDays.includes(day)) {
      newLocations[index].availableDays = locDays.filter(d => d !== day);
    } else {
      newLocations[index].availableDays.push(day);
    }
    setLocations(newLocations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !specialty || !password || !selectedAvatar) {
      setError("Please fill all required fields and select an avatar");
      return;
    }
    for (const loc of locations) {
      if (!loc.clinicName || !loc.address || loc.availableDays.length === 0) {
        setError("Please fill all location details and select available days");
        return;
      }
    }

    const doctorData = { fullName, email, phone, specialty, password, avatar: selectedAvatar, locations };
    console.log("✅ Doctor Registration Data:", doctorData);
    alert("Registration Completed! Check console for data.");
    localStorage.setItem("doctorData", JSON.stringify(doctorData));
     console.log(doctorData)
     navigate('/groupAdminDocDash')
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="flex flex-col items-center px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Doctor Registration
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Avatar Selection */}
            <h3 className="font-semibold mb-2 text-lg">Choose Avatar *</h3>
            <div className="flex gap-2 items-center text-4xl mb-4">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`cursor-pointer p-4 border rounded transition hover:bg-blue-100 ${
                    selectedAvatar === avatar ? "border-blue-600 bg-blue-200" : "border-gray-300"
                  }`}
                >
                  {avatar}
                </div>
              ))}
            </div>

            <input
              type="text"
              placeholder="Full Name *"
              className="w-full border p-2 rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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

            <select
              className="w-full border p-2 rounded"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="">Select Specialty *</option>
              {specialties.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <input
              type="password"
              placeholder="Password *"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <h3 className="font-semibold text-lg mt-4">Practice Locations</h3>

            {locations.map((loc, index) => (
              <div key={index} className="border p-4 rounded mb-4 space-y-2 bg-gray-50">
                <input
                  type="text"
                  placeholder={`Clinic/Hospital Name ${index + 1}`}
                  className="w-full border p-2 rounded"
                  value={loc.clinicName}
                  onChange={(e) => handleLocationChange(index, "clinicName", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border p-2 rounded"
                  value={loc.address}
                  onChange={(e) => handleLocationChange(index, "address", e.target.value)}
                />
                <div className="flex gap-2 flex-wrap">
                  {days.map((day) => (
                    <button
                      type="button"
                      key={day}
                      onClick={() => handleDayToggle(index, day)}
                      className={`px-3 py-1 rounded border ${
                        loc.availableDays.includes(day) ? "bg-blue-600 text-white" : "bg-white"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddLocation}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Add Location
            </button>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition mt-4"
            >
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultipleCenter;
