// import { Aboutus } from "./Components/Aboutus";
import { About } from "./Components/About";
import { Client } from "./Components/Client";
import { Features } from "./Components/Features";
import { Footer } from "./Components/Footer";
import { Gallery } from "./Components/Gallery";
// import { Hero } from "./Components/Hero";
import { Hero1 } from "./Components/Hero1";
import { Navbar } from "./Components/Navbar";
// import { Services } from "./Components/Services";
import { Services1 } from "./Components/Services1";
import { Team } from "./Components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Hero1 />
      {/* <Hero /> */}
      <Features />
      <About />
      {/* <Aboutus /> */}
      <Services1 />
      <Gallery />
      <Client />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
