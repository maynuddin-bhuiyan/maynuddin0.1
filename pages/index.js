import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import About from "../Component/Home/About/About";
import Experience from "../Component/Home/Experience/Experience";
import HeroSec from "../Component/Home/HeroSec/HeroSec";
import SendMail from "../Component/Home/SendMail/SendMail";
import Footer from "../Component/Shared/Footer/Footer";
import Navbar from "../Component/Shared/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <About />
      <Experience />
      <SendMail />
      <Footer />
    </div>
    );
  }
