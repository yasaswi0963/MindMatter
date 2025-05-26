import React from "react";

export default function Mood() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8">
      <header className="w-full max-w-6xl mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">MindMatter</h1>
      </header>

      <main className="text-center mt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Mood <span className="text-purple-600">Tracking</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Keep track of your daily emotions, identify patterns, and gain insight into your mental health journey.
        </p>

        <div className="mt-10 space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-purple-700">How are you feeling today?</h3>
            <div className="mt-4 flex justify-center gap-4">
              <button className="bg-green-100 hover:bg-green-200 text-green-700 font-medium px-4 py-2 rounded-lg">😊 Happy</button>
              <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium px-4 py-2 rounded-lg">😐 Neutral</button>
              <button className="bg-red-100 hover:bg-red-200 text-red-700 font-medium px-4 py-2 rounded-lg">😟 Sad</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-lg text-gray-800 font-medium mb-2">Recent Mood Logs (Coming Soon)</h3>
            <p className="text-sm text-gray-600">Track and view your mood history over time to better understand emotional trends.</p>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MindMatter. All rights reserved.
      </footer>
    </div>
  );
}
