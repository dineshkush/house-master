import React from 'react'
import './Services.css'
import { Link, Outlet } from 'react-router-dom';
import HomeInspectionImage from "../../../src/images/HomeInspectionImage.png";
import PreHandoverInspectionImage from "../../../src/images/PreHandoverInspectionImage.png";
import LeakageSeepageImage from "../../../src/images/LeakageSeepageImage.png";
import ElectricalInspectionImage from "../../../src/images/ElectricalInspectionImage.png";
import EnergyAuditImage from "../../../src/images/EnergyAuditImage.png";
import PropertyManagementImage from "../../../src/images/PropertyManagementImage.png";

const Services = () => {
    return (
        <>
            <section className="inner_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner_banner_content text-center">
                                <h2>Our Features & Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-5 pb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service_item">
                                <img src={HomeInspectionImage} alt="" className='img-fluid mb-3' />
                                <h5>Home Inspection</h5>
                                <p>Comprehensive evaluation of your property’s condition to identify issues and ensure safety.</p>
                                <Link to='/services/home-inspection' className='site_btn'>Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_item">
                                <img src={PreHandoverInspectionImage} alt="" className='img-fluid mb-3' />
                                <h5>Pre-Handover Inspection</h5>
                                <p>Detailed assessments for developers to meet quality standards before project delivery.</p>
                                <Link to='/services/home-inspection' className='site_btn'>Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_item">
                                <img src={LeakageSeepageImage} alt="" className='img-fluid mb-3' />
                                <h5>Leakage & Seepage Inspection</h5>
                                <p>Expert detection of water-related issues to prevent structural damage.</p>
                                <Link to='/services/damp-seepage-inspection' className='site_btn'>Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_item">
                                <img src={ElectricalInspectionImage} alt="" className='img-fluid mb-3' />
                                <h5>Electrical Inspection</h5>
                                <p>Ensuring your electrical systems are safe and compliant.</p>
                                <Link to='/services/electrical-safety' className='site_btn'>Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_item">
                                <img src={EnergyAuditImage} alt="" className='img-fluid mb-3' />
                                <h5>Energy Audit</h5>
                                <p>Analysis of energy efficiency with actionable improvement recommendations.</p>
                                <Link to='/services/industry-energy' className='site_btn'>Read More</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service_item">
                                <img src={PropertyManagementImage} alt="" className='img-fluid mb-3' />
                                <h5>Property Management Service</h5>
                                <p>End-to-end property maintenance and management for hassle-free ownership.</p>
                                <Link to='/services/home-inspection' className='site_btn'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Outlet />
        </>
    )
}

export default Services
