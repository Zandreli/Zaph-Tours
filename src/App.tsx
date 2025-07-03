import { Toolbar } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import TripTypes from "./Pages/TripTypes";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Toolbar></Toolbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/trip-types" element={<TripTypes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* all pages */}
    </>
  );
}

export default App;
