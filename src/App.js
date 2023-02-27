import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AboutUs from "./pages/aboutUs";
import styles from "./Components/styles";
import CountSection from "./Components/CountSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CountSection />
      {/* <AboutUs /> */}
    </div>
  );
}

export default App;
