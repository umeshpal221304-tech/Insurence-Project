import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    id: 1,
    name: "Health Insurance",
    icon: "❤️",
    price: "₹499/month",
    description: "Cashless hospitalization, free health checkups and family coverage."
  },
  {
    id: 2,
    name: "Life Insurance",
    icon: "👨‍👩‍👧",
    price: "₹799/month",
    description: "Secure your family's financial future with life protection."
  },
  {
    id: 3,
    name: "Car Insurance",
    icon: "🚗",
    price: "₹699/month",
    description: "Comprehensive protection against accidents and damages."
  },
  {
    id: 4,
    name: "Bike Insurance",
    icon: "🏍️",
    price: "₹299/month",
    description: "Affordable plans with instant claim support."
  },
  {
    id: 5,
    name: "Travel Insurance",
    icon: "✈️",
    price: "₹399/month",
    description: "Travel safely with worldwide emergency assistance."
  },
  {
    id: 6,
    name: "Home Insurance",
    icon: "🏠",
    price: "₹599/month",
    description: "Protect your home against fire, theft and natural disasters."
  }
];

function Plans() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h1 className="text-center text-primary fw-bold mb-3">
          Insurance Plans
        </h1>

        <p className="text-center text-muted mb-5">
          Choose the insurance plan that best fits your needs.
        </p>

        <div className="row">
          {plans.map((plan) => (
            <div className="col-md-4 mb-4" key={plan.id}>
              <div className="card shadow h-100">
                <div className="card-body text-center">

                  <h1>{plan.icon}</h1>

                  <h4 className="mt-3">{plan.name}</h4>

                  <h3 className="text-primary my-3">
                    {plan.price}
                  </h3>

                  <p>{plan.description}</p>

                  <button className="btn btn-primary w-100">
                    Buy Now
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Plans;