
import React from "react";

function Home() {

  return (
    <div className="home-section">
      {/* Pass the onPageChange function to the Navbar component */}
      <Navbar onPageChange={onPageChange} />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Doctors/>
      <Footer />
    </div>
  );
}

export default Home;
