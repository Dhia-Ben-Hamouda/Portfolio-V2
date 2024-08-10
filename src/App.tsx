import { Toaster } from "react-hot-toast";
import { ScrollButton } from "./components";
import { Contact, Home, Navbar, Projects, Services, Skills } from "./layout";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollButton />
      <Toaster position="bottom-center" />
    </>
  );
}
