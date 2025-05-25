import React, { useState } from "react";

export default function Therapy() {
  const [bookedSessionId, setBookedSessionId] = useState(null);

  const sessions = [
    {
      id: 1,
      title: "Mindfulness Meditation",
      therapist: "Dr. Aisha Kapoor",
      time: "Monday, 10:00 AM - 10:45 AM",
    },
    {
      id: 2,
      title: "CBT for Anxiety",
      therapist: "Dr. Samuel Lee",
      time: "Wednesday, 2:00 PM - 2:45 PM",
    },
    {
      id: 3,
      title: "Stress Relief Workshop",
      therapist: "Dr. Meera Nair",
      time: "Friday, 6:00 PM - 6:45 PM",
    },
  ];

  const handleBooking = (id) => {
    setBookedSessionId(id);
    // Later, make POST request to your backend to save booking
    // Example: axios.post("/api/therapy/book", { sessionId: id, userId });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-100 to-blue-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">Therapy Sessions</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
        Book a real-time session with certified therapists. Choose a slot that fits your schedule.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="bg-white p-6 rounded-xl shadow-md border border-teal-200"
          >
            <h2 className="text-xl font-semibold text-teal-800 mb-1">{session.title}</h2>
            <p className="text-gray-700">Therapist: {session.therapist}</p>
            <p className="text-gray-600 mb-4">Time: {session.time}</p>

            {bookedSessionId === session.id ? (
              <span className="text-green-600 font-medium">✅ Session Booked</span>
            ) : (
              <button
                onClick={() => handleBooking(session.id)}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Book Session
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
