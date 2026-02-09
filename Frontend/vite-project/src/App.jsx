import About from "./components/About";
import Benefits from "./components/Benifits";
import Footer from "./components/Footer";
import Home from "./components/Hero";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";


export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Benefits/>
      <Vision/>
      <Footer/>
    </>
  );
}
