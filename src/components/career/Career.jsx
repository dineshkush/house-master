import React, { useState } from 'react'
import './Career.css'
import axios from 'axios'

const Career = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        jobRole: "",
        yearsOfExperience: "",
        CurrentLocation: "",
        HighestQualification: "",
        UploadResume: null,
        LinkedInProfile: "",
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        // File handling for UploadResume
        if (type === "file") {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0], // Store the selected file
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value, // Update value for text fields
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add your API call or other submission logic here
    };

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
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="mb-3 col-lg-12">
                                            <label htmlFor="name" className="form-label">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="email" className="form-label">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="phone" className="form-label">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="jobRole" className="form-label">
                                                Preferred Job Role
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="jobRole"
                                                name="jobRole"
                                                value={formData.jobRole}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="yearsOfExperience" className="form-label">
                                                Years of Experience
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="yearsOfExperience"
                                                name="yearsOfExperience"
                                                value={formData.yearsOfExperience}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="CurrentLocation" className="form-label">
                                                Current Location
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="CurrentLocation"
                                                name="CurrentLocation"
                                                value={formData.CurrentLocation}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="HighestQualification" className="form-label">
                                                Highest Qualification
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="HighestQualification"
                                                name="HighestQualification"
                                                value={formData.HighestQualification}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" htmlFor="UploadResume">
                                                Upload Resume
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="UploadResume"
                                                name="UploadResume"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3 col-lg-12">
                                            <label htmlFor="LinkedInProfile" className="form-label">
                                                LinkedIn Profile
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="LinkedInProfile"
                                                name="LinkedInProfile"
                                                value={formData.LinkedInProfile}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-3 col-lg-12">
                                            <label htmlFor="comment" className="form-label">
                                                Why Do You Want to Join Us? *
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="comment"
                                                name="comment"
                                                rows="2"
                                                value={formData.comment}
                                                onChange={handleChange}
                                            ></textarea>
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