import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout = () => {

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
            <Header phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} linkedin={linkedin} />
            <Outlet />
            <Footer phone={phoneNumber} email={emailId} facebook={facebookLink} twitter={twitterLink} instagram={instagramLink} linkedin={linkedin} />
        </>
    )
}

export default Layout
