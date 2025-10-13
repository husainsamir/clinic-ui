
import React, { useState } from 'react'
 import QRCode from 'react-qr-code';
import { useForm } from 'react-hook-form';
const Dashboard = () => {
   const { register, handleSubmit, reset } = useForm();
  const [appointments, setAppointments] = useState([]);
  const [qrValue, setQrValue] = useState('');

  const onSubmit = (data) => {
    setAppointments([...appointments, data]);
    setQrValue(JSON.stringify(data));
    reset();
  };

  const doctors = [
    { name: "Dr. Sharma", specialty: "General Physician" },
    { name: "Dr. Mehta", specialty: "Dentist" },
    { name: "Dr. Kapoor", specialty: "Pediatrics" },
  ];
     
  return (
      <>
          {/* header part */}
    <div className="bg-white text-gray-900 min-h-screen ">
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 py-6">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Clinic Name</h1>
          <p className="mt-2 text-lg text-white">Your Health, Our Priority</p>
        </div>
      </header>

      {/* Doctors Section */}   
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">{doc.name}</h3>
                <p className="text-gray-600 mt-1">{doc.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Book Appointment</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Patient Name"
              {...register('name', { required: true })}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="w-full p-2 border rounded"
            />
            <input
              type="date"
              {...register('date', { required: true })}
              className="w-full p-2 border rounded"
            />
            <select {...register('doctor', { required: true })} className="w-full p-2 border rounded">
              <option value="">Select Doctor</option>
              {doctors.map((doc, i) => (
                <option key={i} value={doc.name}>{doc.name}</option>
              ))}
            </select>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Book Appointment
            </button>
          </form>

          {/* QR Code */}
          {qrValue && (
            <div className="mt-6 flex flex-col items-center justify-center">
              <p className="mb-2 font-semibold text-center">Your Appointment QR Code:</p>
              <QRCode value={qrValue} size={120} />
            </div>
          )}

        </div>
      </section>

      {/* Appointment List */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-md mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Appointments</h2>
          <ul className="space-y-4">
            {appointments.map((apt, id) => (
              <li key={id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                  <p><strong>{apt.name}</strong> with {apt.doctor}</p>
                  <p className="text-gray-600">{apt.email} | {apt.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-500 to-teal-500 py-6 text-center text-white">
        © 2025 Clinic Name. All rights reserved.
      </footer>
    </div>
      </>
  )     
  
}

export default Dashboard