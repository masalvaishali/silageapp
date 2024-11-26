import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import SoilMoistureSensorVariableDepth from './pages/SoilMoistureSensorVariableDepth/SoilMoistureSensorVariableDepth';
import SilageMonitoringAlarmSystem from './pages/SilageMonitoringAlarmSystem/SilageMonitoringAlarmSystem';
import SoilMoistureSensorFixedDepth from './pages/SoilMoistureSensorFixedDepth/SoilMoistureSensorFixedDepth';
import StartTopology from './pages/StartTopology/StartTopology';
import SmartAutomaticWeatherStation from './pages/SmartAutomaticWeatherStation/SmartAutomaticWeatherStation';
import DetailedGraph from './Common/DetailedGraph';
import LargeGraph from './Common/LargeGraph';
import Login from './pages/Login/Login';
import { useState } from 'react';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuthStatus = sessionStorage.getItem('isAuthenticated');
    return savedAuthStatus === 'true'; // Return true if it's set to 'true' in sessionStorage
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  // When the user logs out, remove the authentication status from sessionStorage
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Login setIsAuthenticated={handleLogin} />} />

          {/* Private Routes */}
          <Route
            path="/home"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><Home /></PrivateRoute>}
          />
          <Route
            path="/SoilMoistureSensorVariableDepth"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><SoilMoistureSensorVariableDepth /></PrivateRoute>}
          />
          <Route
            path="/SilageMonitoringAlarmSystem"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><SilageMonitoringAlarmSystem  handleLogout={handleLogout}/></PrivateRoute>}
          />
          <Route
            path="/SoilMoistureSensorFixedDepth"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><SoilMoistureSensorFixedDepth /></PrivateRoute>}
          />
          <Route
            path="/StartTopology"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><StartTopology /></PrivateRoute>}
          />
          <Route
            path="/SmartAutomaticWeatherStation"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><SmartAutomaticWeatherStation /></PrivateRoute>}
          />
          <Route
            path="/detailed-graph"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><DetailedGraph /></PrivateRoute>}
          />
          <Route
            path="/large-graph"
            element={<PrivateRoute isAuthenticated={isAuthenticated}><LargeGraph /></PrivateRoute>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
