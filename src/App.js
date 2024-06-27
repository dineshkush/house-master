import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import HomeInspaction from "./components/services/home-inspaction/HomeInspaction";
import DampSeepageInspection from "./components/services/damp-seepage-inspection/DampSeepageInspection";
import ElectricalSafety from "./components/services/electrical-safety/ElectricalSafety";
import IndustryEnergy from "./components/services/industry-energy/IndustryEnergy";
import Faqs from "./components/faqs/Faqs";
import Projects from "./components/projects/Projects";
import Payment from "./components/payment/Payment";
import BookInspection from "./components/book-inspection/BookInspection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import PaymentMethods from "./components/payment-methods/PaymentMethods";

const phoneNumber = '+919896442289';
const emailId = 'info@housemaster.in';

const socialMedia = [
  "https://www.facebook.com/tuna-theme",
  "https://www.twitter.com/tuna-theme",
  "https://www.instagram.com/tuna-theme",
  "https://www.dribble.com/tuna-theme"
]

function App() {

  const [facebookLink, twitterLink, instagramLink, dribbbleLink] = socialMedia;
  
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Header phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} dribbble={dribbbleLink} />

        <Routes>
          
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/services/home-inspaction" exact element={<HomeInspaction />} />
          <Route path="/services/damp-seepage-inspection" exact element={<DampSeepageInspection />} />
          <Route path="/services/electrical-safety" exact element={<ElectricalSafety />} />
          <Route path="/services/industry-energy" exact element={<IndustryEnergy />} />
          <Route path="/faqs" exact element={<Faqs />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/payment" exact element={<Payment phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} dribbble={dribbbleLink} />} />
          <Route path="/payment-methods" exact element={<PaymentMethods />} />
          <Route path="/book-inspection" exact element={<BookInspection phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} dribbble={dribbbleLink} />} />
        </Routes>

        <Footer phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} dribbble={dribbbleLink} />
      </BrowserRouter>
    </>
  );
}

export default App;
