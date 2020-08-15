import React, { Component } from 'react'
import Resume from '../content/navbar/elizabethlouieresume.pdf'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="navbar-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item active"><a className="page-scroll" href="#home">Home</a></li>
                                        <li className="nav-item"><a className="page-scroll" href="#about">About</a></li>
                                        <li className="nav-item"><a className="page-scroll" href="#experience">Experience</a></li>
                                        <li className="nav-item"><a className="page-scroll" href="#projects">Projects</a></li>
                                        <li className="nav-item"><a className="page-scroll" href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="navbar-btn d-none d-sm-inline-block">
                                    <ul>
                                        <li><a className="solid" href={Resume} target="_blank">Resume</a></li>
                                    </ul>
                                </div>
                            </nav> {/* navbar */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}