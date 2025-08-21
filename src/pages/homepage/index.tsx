// import Sidebar from '../../components/sidebar'
import Hero from "../../components/hero";
//import FeedbackClients from "../../components/feedback-clients";
import Footer from "../../components/footer";
import "./Homepage.css";
import AboutUs from "../../components/about-us";
import OurProducts from "../../components/products";
import OurMission from "../../components/our-mission/OurMission";
import ContactUs from "../../components/contactUs/ContactUs";

export default function Homepage() {
  return (
    <div className="homepage-wrapper">
      <Hero />
      {/* <Sidebar /> */}
      <AboutUs />
      <OurProducts />

      <OurMission />

      <ContactUs />
      <Footer />
    </div>
  );
}
