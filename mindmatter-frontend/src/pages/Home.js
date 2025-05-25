// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8">
      <header className="w-full max-w-6xl mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">MindMatter</h1>
        <nav className="space-x-6 text-lg font-medium">
          <Link to="/" className="text-blue-700 hover:underline">Home</Link>
          <Link to="/forum" className="text-blue-700 hover:underline">Forum</Link>
          <Link to="/therapy" className="text-blue-700 hover:underline">Therapy</Link>
          <Link to="/profile" className="text-blue-700 hover:underline">Profile</Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow"
          >
            Logout
          </button>
        </nav>
      </header>

      <main className="text-center mt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Welcome to <span className="text-purple-600">MindMatter</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
          Your mental wellness journey starts here. Explore personalized therapy, engage in community forums, and track your progress.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Link
            to="/therapy"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition shadow"
          >
            Start Therapy
          </Link>
          <Link
            to="/forum"
            className="bg-white border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg text-lg hover:bg-purple-100 transition shadow"
          >
            Visit Forum
          </Link>
        </div>
      </main>

      <footer className="mt-16 text-sm text-gray-500">&copy; {new Date().getFullYear()} MindMatter. All rights reserved.</footer>
    </div>
  );
}
