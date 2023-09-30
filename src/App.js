// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import HomeInspaction from "./components/services/home-inspaction/HomeInspaction";
import WaterLeakage from "./components/services/water-leakage/WaterLeakage";
import ElectricalSafety from "./components/services/electrical-safety/ElectricalSafety";
import IndustryEnergy from "./components/services/industry-energy/IndustryEnergy";
import Faqs from "./components/faqs/Faqs";
import Projects from "./components/projects/Projects";
import Payment from "./components/payment/Payment";
import BookInspection from "./components/book-inspection/BookInspection";
import { BrowserRouter, Route, Routes } from "react-router-dom";



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
        <Header phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} dribbble={dribbbleLink} />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/services/home-inspaction" exact element={<HomeInspaction />} />
          <Route path="/services/water-leakage" exact element={<WaterLeakage />} />
          <Route path="/services/electrical-safety" exact element={<ElectricalSafety />} />
          <Route path="/services/industry-energy" exact element={<IndustryEnergy />} />
          <Route path="/faqs" exact element={<Faqs />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/book-inspection" exact element={<BookInspection />} />
        </Routes>

        <Footer phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} dribbble={dribbbleLink} />
      </BrowserRouter>
    </>
  );
}

export default App;
