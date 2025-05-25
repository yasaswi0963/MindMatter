import React from "react";

export default function Forum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Community Forum</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
        A safe, inclusive space to connect with others on similar journeys. Share stories, ask questions, and offer support.
      </p>

      <div className="w-full max-w-4xl space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-800 mb-1">💬 Coping with Stress</h2>
          <p className="text-gray-700">
            Share how you deal with stressful situations. What techniques work for you? Let’s learn from each other.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-800 mb-1">🌈 Mental Health Wins</h2>
          <p className="text-gray-700">
            Celebrate small victories! Overcame a tough day? Had a breakthrough in therapy? Post it here and inspire others.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-purple-800 mb-1">❓ Ask a Therapist</h2>
          <p className="text-gray-700">
            Got questions about therapy, medications, or mental wellness? Our licensed experts and experienced users can help.
          </p>
        </div>
      </div>
    </div>
  );
}
