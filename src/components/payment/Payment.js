import React from "react";
import { Helmet } from "react-helmet-async";
import PaymentForm from "./payment-form/PaymentForm";
import ContactDetails from "../shared/contact-details/ContactDetails";
import { useState, useEffect } from "react";
import { getSeo } from "../services/seoservices/seo";

function Payment({ phone, email, facebook, twitter, instagram, linkedin }) {
  const [seo, setSeo] = useState({})
  const [loading, setLoading] = useState(false)
  const currentUrl = window.location.href
  const urlarr = currentUrl.split('/')
  const path = urlarr[urlarr.length-1]
  const handleFetchSeo  = async() => {
    setLoading(true)
    const response = await getSeo(path)
    setSeo(response)
    setLoading(false)
  }
  useEffect(() => {
    handleFetchSeo()
  },[])
  return (
    <>
       <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <meta name="keywords" content={seo?.keywords} />
        <meta property="og:title" content={seo?.open_graph?.title} />
        <meta
          property="og:description"
          content={seo?.open_graph?.description}
        />
        <meta name="twitter:title" content={seo?.twitter?.title} />
        <meta name="twitter:description" content={seo?.twitter?.description} />
        <link rel="canonical" href={currentUrl} />
        <meta name="robots" content={seo?.robots} />
        <meta
          property="twitter:image:alt"
        /> 
        <script type="application/ld+json">{seo?.script}</script>
       </Helmet> 

      <section className="payment_form_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <PaymentForm />
            </div>
            <div className="col-lg-6">
              <ContactDetails
                phone={phone}
                email={email}
                facebook={facebook}
                twitter={twitter}
                instagram={instagram}
                linkedin={linkedin}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
