import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PremiumCalculator() {
  const [age, setAge] = useState("");
  const [type, setType] = useState("Health");
  const [premium, setPremium] = useState(null);

  const calculatePremium = () => {
    let amount = 0;

    if (type === "Health") {
      amount = age < 30 ? 500 : age < 50 ? 1000 : 1500;
    } else if (type === "Life") {
      amount = age < 30 ? 700 : age < 50 ? 1400 : 2000;
    } else if (type === "Car") {
      amount = 1200;
    } else if (type === "Bike") {
      amount = 600;
    } else if (type === "Travel") {
      amount = 900;
    }

    setPremium(amount);
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="card shadow p-4 col-md-6 mx-auto">
          <h2 className="text-center text-primary mb-4">
            Premium Calculator
          </h2>

          <div className="mb-3">
            <label>Insurance Type</label>
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Health</option>
              <option>Life</option>
              <option>Car</option>
              <option>Bike</option>
              <option>Travel</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={calculatePremium}
          >
            Calculate Premium
          </button>

          {premium && (
            <div className="alert alert-success mt-4 text-center">
              <h4>Estimated Premium</h4>
              <h3>₹ {premium} / Month</h3>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PremiumCalculator;