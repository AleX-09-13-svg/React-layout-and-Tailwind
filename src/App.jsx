import Nav from "./components/sections/nav/Nav";
import Hero from "./components/sections/hero/Hero";
import Offer from "./components/sections/offer/Ofter";
import Testimonials from "./components/sections/testimonials/Testimonials";
import Services from "./components/sections/services/Services";
import Cta from "./components/sections/cta/Cta";

function App() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center m-5">
      <Nav></Nav>
      <Hero />
      <Offer />
      <Testimonials />
      <Services />
      <Cta></Cta>
    </div>
  );
}

export default App;
