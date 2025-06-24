import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Forum from './pages/Forum';
import Therapy from './pages/Therapy';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Meditation from "./pages/Meditation";
import Mood from "./pages/Mood";
import TherapyBooking from './pages/TherapyBooking';


function App() {
  return (
    
    <Routes>
      {/* Option 1: Show Home at '/' */}
      <Route path="/" element={<Home />} />
      
      {/* Option 2: Redirect '/' to '/login' */}
      {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/meditation" element={<ProtectedRoute><Meditation /></ProtectedRoute>} />
      <Route path="/mood" element={<ProtectedRoute><Mood /></ProtectedRoute>} />
      <Route path="/book-therapy" element={<ProtectedRoute><TherapyBooking /></ProtectedRoute>} />

      <Route
        path="/forum"
        element={
          <ProtectedRoute>
            <Forum />
          </ProtectedRoute>
        }
      />

      <Route
        path="/therapy"
        element={
          <ProtectedRoute>
            <Therapy />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Catch all unmatched routes - redirect to Home or Login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;  