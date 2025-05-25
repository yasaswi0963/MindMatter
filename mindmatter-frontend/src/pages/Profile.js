import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Your Profile</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
        Manage your account details, track your therapy progress, and customize your experience.
      </p>

      <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-md space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Email:</span>
          <span className="text-gray-900">user@example.com</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Joined:</span>
          <span className="text-gray-900">January 2025</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Mood Check-ins:</span>
          <span className="text-gray-900">28</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Completed Sessions:</span>
          <span className="text-gray-900">12</span>
        </div>
        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
