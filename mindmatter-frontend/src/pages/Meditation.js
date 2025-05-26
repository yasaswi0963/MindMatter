import React from "react";

export default function Meditation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8">
      <header className="w-full max-w-6xl mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">MindMatter</h1>
      </header>

      <main className="text-center mt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Meditation <span className="text-purple-600">Sessions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Discover guided meditations to help reduce stress, improve focus, and enhance emotional well-being.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700">Morning Clarity</h3>
            <p className="text-gray-600 mt-2">Start your day with a 10-minute guided meditation to boost clarity and calm.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700">Stress Relief</h3>
            <p className="text-gray-600 mt-2">A 15-minute meditation session focused on reducing anxiety and restoring peace.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700">Sleep Aid</h3>
            <p className="text-gray-600 mt-2">Relax before bedtime with this calming 20-minute meditation to aid restful sleep.</p>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MindMatter. All rights reserved.
      </footer>
    </div>
  );
}
