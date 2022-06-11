import "./App.scss";
import { Routes, Route } from "react-router-dom";
//import Sidebar from './Components/Sidebar';
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import SoundBar from "./Components/Soundbar";

function App() {
  return (
    <>
      <SoundBar />
      <Routes>
        {/* <Route index element={<Sidebar />} /> */}
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
