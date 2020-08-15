import React, { Component } from 'react'
import toHtml from './parser'
import data from '../content/about/about.json'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: data[0].subtitle,
            title: data[0].title,
            text: toHtml(data[0].text, data[0], 2),
            image: data[0].image,
            imagetext: data[0].imagetext
        };
    }

    render() {
        return (
            <section id="about" className="about-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-left-content mt-45">
                                <h6 className="sub-title">{this.state.subtitle}</h6>
                                <h4 className="title">{this.state.title}</h4>
                                <ul className="about-line">
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                </ul>
                                <p className="text"><span dangerouslySetInnerHTML={{ __html: this.state.text }} /></p>
                            </div> {/* about left content */}
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right-content mt-50">
                                <div className="about-content-wrapper about-active">
                                    <div className="single-about">
                                        <img src={this.state.image} alt="My Photo"></img>
                                        <p className="text">{this.state.imagetext}</p>
                                    </div> {/* single about */}
                                </div> {/* about content wrapper */}
                            </div> {/* about right content */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}