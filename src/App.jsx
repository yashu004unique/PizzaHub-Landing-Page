import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
function App() {
  return (
    <>
      <Header />
      <section
        id="home"
        className="min-h-screen  bg-amber-950 text-white flex flex-col justify-center items-center p-6 sm:px-10 lg:px-20 py-12"
      >
        <Hero />
      </section>
      <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 lg:px-20 py-12">
        <About />
      </section>
      <section
        id="services"
        className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center px-6 sm:px-10 lg:px-20 py-12"
      >
        <Services />
      </section>
      <section
        id="contact"
        className="min-h-[70vh] flex flex-col justify-center items-center px-6 sm:px-10 lg:px-20 py-12"
      >
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
export default App;
