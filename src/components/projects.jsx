import React, { Component } from 'react'

export default class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="projects" className="projects-area projects-four pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="section-title text-center pb-10">
                                <h3 className="title">Featured Works</h3>
                                <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="projects-menu text-center mt-50">
                                <ul>
                                    <li data-filter="*" className="active">ALL PROJECTS</li>
                                    <li data-filter=".branding-4">BRANDING</li>
                                    <li data-filter=".marketing-4">MARKETING</li>
                                    <li data-filter=".planning-4">PLANNING</li>
                                    <li data-filter=".research-4">RESEARCH</li>
                                </ul>
                            </div> {/* projects menu */}
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row no-gutters grid mt-50">
                                <div className="col-lg-4 col-sm-6 branding-4 planning-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/1.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/1.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                                <div className="col-lg-4 col-sm-6 marketing-4 research-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/2.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/2.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                                <div className="col-lg-4 col-sm-6 branding-4 marketing-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/3.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/3.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                                <div className="col-lg-4 col-sm-6 planning-4 research-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/4.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/4.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                                <div className="col-lg-4 col-sm-6 marketing-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/5.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/5.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                                <div className="col-lg-4 col-sm-6 planning-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/6.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/6.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                                <div className="col-lg-4 col-sm-6 research-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/7.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/7.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                                <div className="col-lg-4 col-sm-6 branding-4 planning-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/8.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/8.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                                <div className="col-lg-4 col-sm-6 marketing-4">
                                    <div className="single-projects">
                                        <div className="projects-image">
                                            <img src="assets/images/projects/9.png" alt="" />
                                            <div className="projects-overlay d-flex align-items-center justify-content-center">
                                                <div className="projects-content">
                                                    <div className="projects-icon">
                                                        <a className="image-popup" href="assets/images/projects/9.png"><i className="lni lni-zoom-in" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                    <div className="projects-icon">
                                                        <a href="#"><i className="lni lni-link" /></a>
                                                        <img src="assets/images/projects/shape.svg" alt="shape" className="shape" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* single projects */}
                                </div>
                            </div> {/* row */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}