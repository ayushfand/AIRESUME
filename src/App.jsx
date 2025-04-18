// File: App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Webinars from './pages/Webinars';
import PastEvents from './pages/PastEvents';
import Members from './pages/Members';
import Collaborate from './pages/Collaborate';
import Reviews from './pages/Reviews';
import Posters from './pages/Posters';
import ContactUs from './Pages/ContactUs';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Login from './Pages/Login.jsx';
import EventDetails from './Pages/EventDetails.jsx';
import WebinarDetails from './pages/WebinarDetails';
import { Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem('user'));
  //   if (storedUser) setUser(storedUser);
  // }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events user={user} />} />
        <Route path="/webinars" element={<Webinars user={user} />} />
        <Route path="/webinars/:webinarName" element={<WebinarDetails user={user} /> } />

        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/members" element={<Members />} />
        <Route path="/collaborate" element={<Collaborate />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/profile" element={user ? <Profile user={user} /> : <Navigate to="/" replace />} />
        <Route path="/events/:eventName" element={<EventDetails user={user} />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;