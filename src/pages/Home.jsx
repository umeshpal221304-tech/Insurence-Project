import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Our Insurance Plans
        </h2>

        <div className="row">

          <div className="col-md-3">
            <div className="card p-3 text-center">
              <h4>❤️ Health</h4>
              <p>Complete health coverage for your family.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 text-center">
              <h4>🚗 Car</h4>
              <p>Affordable car insurance with quick claim.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 text-center">
              <h4>🏍 Bike</h4>
              <p>Protect your bike with lowest premium.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 text-center">
              <h4>👨‍👩‍👧 Life</h4>
              <p>Secure your family's future with life insurance.</p>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;