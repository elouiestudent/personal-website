import React, { Component } from 'react'
import toHtml from './parser'
import data from '../content/projects/projects.json'

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: data[0].title,
            text: data[0].text,
            projects: data[0].projects
        };
    }

    render() {
        return (
            <section id="projects" className="projects-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center pb-20">
                                <h4 className="title">{this.state.title}</h4>
                                <p className="text">{this.state.text}</p>
                            </div> {/* row */}
                        </div>
                    </div> {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="projects-menu pt-30 text-center">
                                <ul>
                                    <li data-filter="*" className="active">ALL WORK</li>
                                    <li data-filter=".branding-3">BRANDING</li>
                                    <li data-filter=".marketing-3">MARKETING</li>
                                    <li data-filter=".planning-3">PLANNING</li>
                                    <li data-filter=".research-3">RESEARCH</li>
                                </ul>
                            </div> {/* projects menu */}
                        </div>
                    </div> {/* row */}
                    <div className="row grid">
                        <div className="col-lg-4 col-sm-6 branding-3 planning-3">
                            <div className="single-projects mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <div className="projects-image">
                                    <img src="assets/images/projects/1.png" alt="" />
                                    <div className="projects-overlay d-flex align-items-center justify-content-center">
                                        <div className="projects-content">
                                            <div className="projects-icon">
                                                <a className="image-popup" href="assets/images/projects/1.png"><i className="lni lni-zoom-in" /></a>
                                            </div>
                                            <div className="projects-icon">
                                                <a href="#"><i className="lni lni-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects-text">
                                    <h4 className="projects-title"><a href="#">Graphics Design</a></h4>
                                    <p className="text">Short description for the ones who look for something new. Awesome!</p>
                                </div>
                            </div> {/* single projects */}
                        </div>
                        <div className="col-lg-4 col-sm-6 marketing-3 research-3">
                            <div className="single-projects mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                <div className="projects-image">
                                    <img src="assets/images/projects/2.png" alt="" />
                                    <div className="projects-overlay d-flex align-items-center justify-content-center">
                                        <div className="projects-content">
                                            <div className="projects-icon">
                                                <a className="image-popup" href="assets/images/projects/2.png"><i className="lni lni-zoom-in" /></a>
                                            </div>
                                            <div className="projects-icon">
                                                <a href="#"><i className="lni lni-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects-text">
                                    <h4 className="projects-title"><a href="#">Graphics Design</a></h4>
                                    <p className="text">Short description for the ones who look for something new. Awesome!</p>
                                </div>
                            </div> {/* single projects */}
                        </div>
                        <div className="col-lg-4 col-sm-6 branding-3 marketing-3">
                            <div className="single-projects mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.7s">
                                <div className="projects-image">
                                    <img src="assets/images/projects/3.png" alt="" />
                                    <div className="projects-overlay d-flex align-items-center justify-content-center">
                                        <div className="projects-content">
                                            <div className="projects-icon">
                                                <a className="image-popup" href="assets/images/projects/3.png"><i className="lni lni-zoom-in" /></a>
                                            </div>
                                            <div className="projects-icon">
                                                <a href="#"><i className="lni lni-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects-text">
                                    <h4 className="projects-title"><a href="#">Graphics Design</a></h4>
                                    <p className="text">Short description for the ones who look for something new. Awesome!</p>
                                </div>
                            </div> {/* single projects */}
                        </div>
                        <div className="col-lg-4 col-sm-6 planning-3 research-3">
                            <div className="single-projects mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <div className="projects-image">
                                    <img src="assets/images/projects/4.png" alt="" />
                                    <div className="projects-overlay d-flex align-items-center justify-content-center">
                                        <div className="projects-content">
                                            <div className="projects-icon">
                                                <a className="image-popup" href="assets/images/projects/4.png"><i className="lni lni-zoom-in" /></a>
                                            </div>
                                            <div className="projects-icon">
                                                <a href="#"><i className="lni lni-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects-text">
                                    <h4 className="projects-title"><a href="#">Graphics Design</a></h4>
                                    <p className="text">Short description for the ones who look for something new. Awesome!</p>
                                </div>
                            </div> {/* single projects */}
                        </div>
                        <div className="col-lg-4 col-sm-6 marketing-3">
                            <div className="single-projects mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                <div className="projects-image">
                                    <img src="assets/images/projects/5.png" alt="" />
                                    <div className="projects-overlay d-flex align-items-center justify-content-center">
                                        <div className="projects-content">
                                            <div className="projects-icon">
                                                <a className="image-popup" href="assets/images/projects/5.png"><i className="lni lni-zoom-in" /></a>
                                            </div>
                                            <div className="projects-icon">
                                                <a href="#"><i className="lni lni-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects-text">
                                    <h4 className="projects-title"><a href="#">Graphics Design</a></h4>
                                    <p className="text">Short description for the ones who look for something new. Awesome!</p>
                                </div>
                            </div> {/* single projects */}
                        </div>
                        <div className="col-lg-4 col-sm-6 planning-3">
                            <div className="single-projects mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.7s">
                                <div className="projects-image">
                                    <img src="assets/images/projects/6.png" alt="" />
                                    <div className="projects-overlay d-flex align-items-center justify-content-center">
                                        <div className="projects-content">
                                            <div className="projects-icon">
                                                <a className="image-popup" href="assets/images/projects/6.png"><i className="lni lni-zoom-in" /></a>
                                            </div>
                                            <div className="projects-icon">
                                                <a href="#"><i className="lni -link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects-text">
                                    <h4 className="projects-title"><a href="#">Graphics Design</a></h4>
                                    <p className="text">Short description for the ones who look for something new. Awesome!</p>
                                </div>
                            </div> {/* single projects */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}