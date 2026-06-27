function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">

            <h1>Secure Your Future Today</h1>

            <p>
              Choose the best Health, Life, Car and Travel Insurance
              with SafeLife Insurance Company.
            </p>

            <button className="btn btn-warning btn-lg">
              Buy Insurance
            </button>

          </div>

          <div className="col-md-6 text-center">

            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700"
              alt="Insurance"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;