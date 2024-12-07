import React from 'react'
import './Career.css'

const Career = () => {
    return (
        <>
            <section className="inner_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner_banner_content text-center">
                                <h2>Career</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='career_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="career_Form">
                                <form>
                                    <div className="row">
                                        <div className="mb-3 col-lg-12">
                                            <label htmlFor="name" className="form-label">
                                                Name *
                                            </label>
                                            <input type="text" className="form-control" name="name" id="name"
                                                required />
                                        </div>
                                        <div className="mb-3 col-lg-12">
                                            <label htmlFor="address" className="form-label">
                                                Address *
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                rows="2"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="city" className="form-label">
                                                City *
                                            </label>
                                            <input type="text" className="form-control"
                                                id="city"
                                                name="city"
                                                required />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="area" className="form-label">
                                                Area (sq.ft) *
                                            </label>
                                            <input type="text" className="form-control" id="area"
                                                name="area"
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="paymentType" className="form-label">
                                                Property Type *
                                            </label>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                id="paymentType"
                                                name="paymentType"
                                            >
                                                <option value="" disabled>
                                                    Select Type
                                                </option>
                                                <option value="Residential / Bungalow / Apartment">
                                                    Residential / Bungalow / Apartment
                                                </option>
                                                <option value="School / Hospital / Hotels">
                                                    School / Hospital / Hotels
                                                </option>
                                                <option value="pre-visit-payment">Commercial</option>
                                                <option value="pre-visit-payment">Other</option>
                                            </select>
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="phone" className="form-label">
                                                Phone *
                                            </label>
                                            <input type="tel" className="form-control" id="phone"
                                                name="phone"
                                                required />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="email" className="form-label">
                                                Email *
                                            </label>
                                            <input type="email" className="form-control" id="email"
                                                name="email"
                                                required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">
                                                Let us know what you need help with...
                                            </label>
                                            <textarea className="form-control" id="message"
                                                name="message" rows="3"></textarea>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="service" className="form-label">
                                                Choose your Service
                                            </label>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="seepageCheckbox"
                                                    name="Seepage Leakage Detection"
                                                />
                                                <label className="form-check-label" htmlFor="seepageCheckbox">
                                                    Seepage/Leakage Detection
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="electricalCheckbox"
                                                    name="Electrical Inspection"
                                                />
                                                <label className="form-check-label" htmlFor="electricalCheckbox">
                                                    Electrical Inspection
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="documentCheckbox"
                                                    name="Document Verification"
                                                />
                                                <label className="form-check-label" htmlFor="documentCheckbox">
                                                    Document Verification
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="pmcCheckbox"
                                                    name="PMC Consultation"
                                                />
                                                <label className="form-check-label" htmlFor="pmcCheckbox">
                                                    PMC Consultation
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="vastuCheckbox"
                                                    name="Vastu"
                                                />
                                                <label className="form-check-label" htmlFor="vastuCheckbox">
                                                    Vastu
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn site_btn">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Career