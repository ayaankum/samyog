import './App.css';
import React from 'react'
import HomeMain from './components/HomeMain';
import ClubPage from './pages/ClubPage';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Resource from './pages/Resource';
import Gallery from './pages/Gallery';
import EventsPage from './pages/EventsPage';
import Team from './pages/Team';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomeMain/>}/>
      <Route path="/resources" element={<Resource/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/clubs" element={<ClubPage/>}/>
      <Route path="/eventspage" element={<EventsPage/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
    </>
   );
}
export default App;
