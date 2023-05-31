import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import { Routes, Route } from "react-router-dom";
import Stations from './components/Stations'
import Journeys from './components/Journeys'
import StationDetails from './components/StationDetails'
import "../src/App.css";

const App = () => {
  return (
    <div className='container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/stations/:stationId" element={<StationDetails />} />
        <Route path="/journeys" element={<Journeys />} />
      </Routes>
    </div>
  )
}

export default App