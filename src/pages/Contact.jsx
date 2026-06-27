import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact);

    alert("Your message has been submitted successfully.");
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="text-center mb-5">
          <h1 className="text-primary fw-bold">Contact Us</h1>
          <p className="text-muted">
            We'd love to hear from you. Send us your query.
          </p>
        </div>

        <div className="row">

          {/* Contact Form */}

          <div className="col-md-7">

            <div className="card shadow p-4">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={contact.name}
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
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Subject</label>

                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={contact.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Message</label>

                  <textarea
                    rows="5"
                    className="form-control"
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

          {/* Contact Details */}

          <div className="col-md-5">

            <div className="card shadow p-4">

              <h3 className="text-primary">
                Office Information
              </h3>

              <hr />

              <p>
                <strong>📍 Address:</strong><br />
                SafeLife Insurance Pvt. Ltd.<br />
                Varanasi, Uttar Pradesh, India
              </p>

              <p>
                <strong>📞 Phone:</strong><br />
                +91 90260  55168
              </p>

              <p>
                <strong>📧 Email:</strong><br />
                support@safelifeinsurance.com
              </p>

              <p>
                <strong>🕒 Working Hours:</strong><br />
                Monday – Saturday<br />
                9:00 AM – 6:00 PM
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;