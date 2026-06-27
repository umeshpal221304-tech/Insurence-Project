import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import PremiumCalculator from "./pages/PremiumCalculator";
import BuyPolicy from "./pages/BuyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calculator" element={<PremiumCalculator />} />
        <Route path="/buy-policy" element={<BuyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


