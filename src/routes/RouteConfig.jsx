import React from 'react'
import Layout from '../shared/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/scrollToTop'
import Home from '../components/home/Home'
import AboutUs from '../components/about-us/AboutUs'
import HomeInspaction from '../components/services/home-inspaction/HomeInspaction'
import DampSeepageInspection from '../components/services/damp-seepage-inspection/DampSeepageInspection'
import ElectricalSafety from '../components/services/electrical-safety/ElectricalSafety'
import IndustryEnergy from '../components/services/industry-energy/IndustryEnergy'
import Faqs from '../components/faqs/Faqs'
import Projects from '../components/projects/Projects'
import Payment from '../components/payment/Payment'
import PaymentMethods from '../components/payment-methods/PaymentMethods'
import BookInspection from '../components/book-inspection/BookInspection'
import Career from '../components/career/Career'
import Services from '../components/services/Services'
import HomeInspection from '../components/landing-pages/home-inspection/HomeInspection'
import SeepageAndLeakageInspection from '../components/landing-pages/seepage-and-leakage-inspection/SeepageAndLeakageInspection'

const RouteConfig = () => {

    const phoneNumber = '+919896442289';
    const emailId = 'info@housemaster.in';

    const socialMedia = [
        "https://www.facebook.com/housemasterindia/",
        "https://x.com/housemasterind1",
        "https://www.instagram.com/housemaster_india/",
        "https://in.linkedin.com/company/housemasters-india",
    ]

    const [facebookLink, twitterLink, instagramLink, linkedin] = socialMedia;

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>

                    <Route path="/home-inspection" element={<HomeInspection />} />
                    <Route path="/seepage-and-leakage-inspection" element={<SeepageAndLeakageInspection />} />
                    {/* <Route element={<RequireAuth />}> */}
                    <Route element={<Layout />}>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/about" exact element={<AboutUs />} />
                        <Route path="/faqs" exact element={<Faqs />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/payment" exact element={<Payment phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} linkedin={linkedin} />} />
                        <Route path="/payment-methods" exact element={<PaymentMethods />} />
                        <Route path="/book-inspection" exact element={<BookInspection phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} linkedin={linkedin} />} />
                        <Route path="/career" exact element={<Career />} />

                        <Route path="/services" element={<Services />} />
                        <Route path="/services/home-inspection" exact element={<HomeInspaction />} />
                        <Route path="/services/damp-seepage-inspection" exact element={<DampSeepageInspection />} />
                        <Route path="/services/electrical-safety" exact element={<ElectricalSafety />} />
                        <Route path="/services/industry-energy" exact element={<IndustryEnergy />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteConfig
