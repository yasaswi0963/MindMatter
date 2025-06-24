import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const TherapyBooking = () => {
  const [therapists, setTherapists] = useState([]);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const res = await axios.get('/api/therapists');
        setTherapists(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTherapists();
  }, []);

  const handleBooking = async () => {
    if (!selectedTherapist || !selectedSlot || !date) {
      setMessage('Please select therapist, slot, and date');
      return;
    }

    try {
      const res = await axios.post('/api/therapy', {
        therapistId: selectedTherapist._id,
        date,
        timeSlot: selectedSlot,
        notes,
      });
      setMessage('✅ Session booked successfully!');
      setTimeout(() => navigate('/therapy'), 1500);
    } catch (err) {
      setMessage('❌ Failed to book session');
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Book a Therapy Session
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {therapists.map((t) => (
          <div
            key={t._id}
            className={`border rounded-2xl p-4 shadow hover:shadow-lg transition duration-200 cursor-pointer ${
              selectedTherapist?._id === t._id ? 'border-blue-500' : ''
            }`}
            onClick={() => {
              setSelectedTherapist(t);
              setSelectedSlot('');
            }}
          >
            <div className="flex items-center gap-4">
              <img src={t.avatarUrl} alt={t.name} className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-lg font-semibold">{t.name}</h2>
                <p className="text-sm text-gray-500">{t.specialization.join(', ')}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-600">Available Slots:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {t.availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      selectedSlot === slot && selectedTherapist?._id === t._id
                        ? 'bg-blue-500 text-white'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <label className="block mb-2 font-medium">Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded px-4 py-2 w-full max-w-sm"
        />

        <label className="block mt-4 mb-2 font-medium">Notes (optional):</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="border rounded px-4 py-2 w-full max-w-lg"
          rows="3"
        />

        <button
          onClick={handleBooking}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl transition duration-200"
        >
          Confirm Booking
        </button>

        {message && (
          <p className="mt-4 text-sm font-semibold text-center text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default TherapyBooking;
