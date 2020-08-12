import React, { Component } from 'react'
import data from '../content/slider/slider.json'

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: data[0].subtitle,
            title: data[0].title,
            text: data[0].text,
        };
    }

    render() {
        return (
            <section id="home" className="slider_area">
                <div id="carouselThree" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <ul className="header_social d-none d-lg-block">
                                        <li><a href={data[0].social.github} target="_blank"><i className="lni lni-github-original"></i></a></li>
                                        <li><a href={data[0].social.linkedin} target="_blank"><i className="lni lni-linkedin-original"></i></a></li>
                                        <li><a href={data[0].social.facebook} target="_blank"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href={data[0].social.instagram} target="_blank"><i className="lni lni-instagram-filled"></i></a></li>
                                    </ul>
                                    <div className="col-lg-6">
                                        <div className="slider-content">
                                            <h2 className="text">{this.state.subtitle}</h2>
                                            <h1 className="title">{this.state.title}</h1>
                                            <p className="text">{this.state.text}</p>
                                            <ul className="slider-btn rounded-buttons">
                                                <li><a className="main-btn rounded-one" href={"mailto:" + data[0].social.email} target="_blank">GET IN TOUCH</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> {/* row */}
                            </div> {/* container */}
                            <div className="slider-image-box d-none d-lg-flex align-items-end">
                                {/* <div className="slider-image"> */}
                                    <img className="slider-image" src="assets/images/slider/slider.png" alt="Hero" />
                                {/* </div> slider-imgae */}
                            </div> {/* slider-imgae box */}
                        </div> {/* carousel-item */}
                    </div>
                </div>
            </section>
        );
    }
}

