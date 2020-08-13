import React, { Component } from 'react'
import toHtml from './parser'
import data from '../content/experience/experience.json'

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: data[0].subtitle,
            title: data[0].title,
            image: data[0].image,
            jobs: data[0].jobs
        };
    }

    render() {
        return (
            <section id="experience" className="experience-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-content mt-45">
                                <div className="experience-title">
                                    <h6 className="sub-title">{this.state.subtitle}</h6>
                                    <h4 className="title">{this.state.title}</h4>
                                    <ul className="experience-line">
                                        <li />
                                        <li />
                                        <li />
                                        <li />
                                    </ul>
                                </div> {/* faq title */}
                                <div className="experience-accordion">
                                    <div className="accordion" id="accordionList">
                                        {this.state.jobs.map(function (job, index) {
                                            var heading = "heading" + index;
                                            var collapse = "collapse" + index;
                                            return <div className="card">
                                                <div className="card-header" id={heading}>
                                                    <a className="overlay" href="#" data-toggle="collapse" data-target={'#' + collapse} aria-expanded="false" aria-controls={collapse}><div className="inner"><span dangerouslySetInnerHTML={{ __html: toHtml(job.title, job, 1) }} /></div></a>
                                                </div>
                                                <div id={collapse} className={(index > 0) ? "collapse" : "collapse show"} aria-labelledby={heading} data-parent="#accordionList">
                                                    <div className="card-body">
                                                        <div className="text">{job.date}<b></b><p dangerouslySetInnerHTML={{ __html: '<ul>' + toHtml(job.text.map(phrase => '<li>' + phrase + '</li>'), job, 0) + '</ul>' }} /></div>
                                                    </div>
                                                </div>
                                            </div>;
                                        })}
                                    </div>
                                </div> {/* faq accordion */}
                            </div> {/* faq content */}
                        </div>
                        <div className="col-lg-6">
                            <div className="experience-image mt-0">
                                <img src={this.state.image} alt="experience" />
                            </div> 
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}