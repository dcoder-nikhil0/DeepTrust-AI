import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Box } from "@mui/material";
// import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;
