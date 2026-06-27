import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BuyPolicy() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    insuranceType: "Health",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Policy application submitted successfully!");
    console.log(form);
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="card shadow p-4 col-md-7 mx-auto">
          <h2 className="text-center text-primary mb-4">
            Buy Insurance Policy
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Insurance Type</label>
              <select
                className="form-select"
                name="insuranceType"
                value={form.insuranceType}
                onChange={handleChange}
              >
                <option>Health</option>
                <option>Life</option>
                <option>Car</option>
                <option>Bike</option>
                <option>Travel</option>
              </select>
            </div>

            <button className="btn btn-success w-100" type="submit">
              Apply Now
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BuyPolicy;