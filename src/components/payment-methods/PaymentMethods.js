import React from 'react'
import "./PaymentMethods.css";
import razorpayLogo from "../../images/razorpay-logo.png";
import googlePay from "../../images/google-pay.jpg";

const PaymentMethods = () => {
    return (
        <>
            <section className="inner_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner_banner_content text-center">
                                <h2>Payment Options and Methods</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="payment_options">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='payment_item'>
                                <h3>Option: 1</h3>
                                <p>Use this method for upi, card and net banking paymnets</p>
                                <div className='powered_by'>
                                    <p>Powered by</p>
                                    <img src={razorpayLogo} alt='Razorpay Logo' className='img-fluid' />
                                </div>
                                <div className='site_list payment_option'>
                                    <ul>
                                        <li>FOR Below payment options “Click on pay button “</li>
                                        <li>Debit & Credit Cards </li>
                                        <li>UPI/QR</li>
                                        <li>Cardless EMI</li>
                                        <li>EMI (Credit Card and Debit Card)</li>
                                        <li>Netbanking </li>
                                    </ul>
                                </div>
                                <a href='https://rzp.io/l/lzR6iNS' target='_Blank' className='site_btn'>Pay Now</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='payment_item'>
                                <h3>Option: 2</h3>
                                <p>Scan qr code for payment and share screen shot on whatsapp</p>
                                <div className='qr_img'>
                                    <img src={googlePay} alt='Razorpay Logo' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentMethods
