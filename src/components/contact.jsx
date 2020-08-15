import React, { Component } from 'react'
import data from '../content/contact/contact.json'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: data[0].title,
            text: data[0].text,
            social: data[0].social
        };
    }

    render() {
        return (
            <section id="contact" className="contact-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="section-title text-center pb-30">
                                <h4 className="title">{this.state.title}</h4>
                                <p className="text">{this.state.text[0]}</p>
                            </div> {/* section title */}
                            <ul className="slider-btn rounded-buttons" id="wrapper">
                                <li><a className="main-btn rounded-one" href={"mailto:" + data[0].social.email} target="_blank">GET IN TOUCH</a></li>
                            </ul>
                            <ul className="social text-center mt-30">
                                <li><a href={data[0].social.github} target="_blank"><i className="lni lni-github-original"></i></a></li>
                                <li><a href={data[0].social.linkedin} target="_blank"><i className="lni lni-linkedin-original"></i></a></li>
                                <li><a href={data[0].social.facebook} target="_blank"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href={data[0].social.instagram} target="_blank"><i className="lni lni-instagram-original"></i></a></li>
                            </ul> {/* social */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}