import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">About SafeLife Insurance</h1>
          <p className="text-muted">
            Your trusted partner for protecting your family, health, and future.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=700"
              alt="About SafeLife"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              SafeLife Insurance is committed to providing reliable and affordable
              insurance solutions. We offer Life, Health, Car, Bike, and Travel
              Insurance with fast claim processing and excellent customer support.
            </p>

            <h4 className="mt-4">Our Mission</h4>
            <p>
              To make insurance simple, affordable, and accessible for everyone.
            </p>

            <h4 className="mt-4">Why Choose Us?</h4>
            <ul>
              <li>✔ Fast Claim Settlement</li>
              <li>✔ Affordable Premium Plans</li>
              <li>✔ 24×7 Customer Support</li>
              <li>✔ Secure Online Policy Management</li>
              <li>✔ Trusted by Thousands of Customers</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;