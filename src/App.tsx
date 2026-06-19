import About from "./components/About";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menus from "./components/Menus";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
        <Menus />
        <Gallery />
        <Pricing />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
