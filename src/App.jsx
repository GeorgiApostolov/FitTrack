import { NavLink, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Plans from "./pages/Plans.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <div className="container">
      <nav className="nav">
        <NavLink to="/" className="link">
          FitTrack
        </NavLink>
        <NavLink to="/plans" className="link">
          Plans
        </NavLink>
        <div className="grow" />
        <NavLink to="/login" className="link">
          Login
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </div>
  );
}
