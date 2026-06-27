import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Login API will be connected in the next phase.");
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card shadow p-4">

              <h2 className="text-center text-primary mb-4">
                Login
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>

              </form>

              <p className="text-center mt-3">
                Don't have an account?{" "}
                <Link to="/register">
                  Register
                </Link>
              </p>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;