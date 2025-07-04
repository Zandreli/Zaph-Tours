import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./Components/theme";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import TripTypes from "./Pages/TripTypes";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Toolbar></Toolbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/trip-types" element={<TripTypes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* all pages */}
    </ThemeProvider>
    </>
  );
}

export default App;
