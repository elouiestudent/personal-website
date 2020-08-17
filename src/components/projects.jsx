import React, { Component } from 'react'
import toHtml from './parser'
import toLinkIcon from './linkicons'
import data from '../content/projects/projects.json'

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: data[0].title,
            text: data[0].text,
            tags: data[0].tags,
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
                                    {this.state.tags.map(tag => <li data-filter={"." + tag + "-3"}>{tag.toUpperCase()}</li>)}
                                </ul>
                            </div> {/* projects menu */}
                        </div>
                    </div> {/* row */}
                    <div className="row grid">
                        {this.state.projects.map(function (project) {
                            var filters = project.tags.join("-3 ") + "-3";
                            return (<div className={"col-lg-4 col-sm-6 " + filters}>
                                <div className="single-projects mt-30 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <div className="projects-image">
                                        <img src={project.images[0]} alt="" />
                                        <div className="projects-overlay d-flex align-items-center justify-content-center">
                                            <div className="projects-content">
                                                <div className="projects-icon">
                                                    <div className="image-popup">
                                                        {project.images.map(function (image, index) {
                                                            return (index > 0) ? <a href={image}></a> : <a href={image}><i className="lni lni-zoom-in" /></a>;
                                                        })}
                                                    </div>
                                                </div>
                                                {Object.keys(project.icons).filter(key => key !== project.title.toString()).map(key =>
                                                    <div className="projects-icon">
                                                        <a href={project.icons[key]} target="_blank" rel="noopener noreferrer">
                                                            <i className={toLinkIcon(key)} />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="projects-text">
                                        {/* <h4 className="projects-title">{(project.icons[project.title] === undefined) ? project.title : <a href={project.icons[project.title]} target="_blank" rel="noopener noreferrer">{project.title}</a>}</h4> */}
                                        <h4 className="projects-title">{project.title}</h4>
                                        <p className="text"><span dangerouslySetInnerHTML={{ __html: toHtml(project.text, project, 1) }} /></p>
                                        <p className="text">Technologies: <b>{project.tech.join(", ")}</b></p>
                                    </div>
                                </div>
                            </div>);
                        })}
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}