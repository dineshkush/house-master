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
                                                Full Name *
                                            </label>
                                            <input type="text" className="form-control" name="name" id="name"
                                                required />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="email" className="form-label">
                                                Email Address *
                                            </label>
                                            <input type="email" className="form-control" id="email"
                                                name="email"
                                                required />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="phone" className="form-label">
                                                Phone Number *
                                            </label>
                                            <input type="tel" className="form-control" id="phone"
                                                name="phone"
                                                required />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="jobRole" className="form-label">
                                                Preferred Job Role
                                            </label>
                                            <input type="text" className="form-control" id="jobRole"
                                                name="jobRole" />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="yearsOfExperience" className="form-label">
                                                Years of Experience
                                            </label>
                                            <input type="text" className="form-control" id="yearsOfExperience"
                                                name="yearsOfExperience" />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="CurrentLocation" className="form-label">
                                                Current Location
                                            </label>
                                            <input type="text" className="form-control" id="CurrentLocation"
                                                name="CurrentLocation" />
                                        </div>
                                        <div className="mb-3 col-lg-6">
                                            <label htmlFor="HighestQualification" className="form-label">
                                                Highest Qualification
                                            </label>
                                            <input type="text" className="form-control" id="HighestQualification"
                                                name="HighestQualification" />
                                        </div>
                                        <div class="input-group mb-3">
                                            <label class="input-group-text" for="UploadResume">Upload Resume</label>
                                            <input type="file" class="form-control" id="UploadResume" name='UploadResume' />
                                        </div>
                                        <div className="mb-3 col-lg-12">
                                            <label htmlFor="LinkedInProfile" className="form-label">
                                                LinkedIn Profile
                                            </label>
                                            <input type="text" className="form-control" id="LinkedInProfile"
                                                name="LinkedInProfile" />
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