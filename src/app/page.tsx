import About from "~/components/About";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Listings from "~/components/Listings";
import Navbar from "~/components/Navbar";

export default function HomePage() {
  return (
    <main className="from-primary-medium to-primary-light text-secondary-light flex min-h-screen flex-col justify-between scroll-smooth bg-gradient-to-b">
      <Navbar />
      <Hero />
      <About />
      <Listings />
      <Contact />
      <Footer />
    </main>
  );
}
