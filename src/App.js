import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import Hero from "./Components/Greet";
import Navbar from "./Components/Navbar";
import styles from "./Components/styles";
import CountSection from "./Components/CountSection";
import Moment from "./Components/UI/moment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CountSection />
      <Moment />
    </div>
  );
}

export default App;
