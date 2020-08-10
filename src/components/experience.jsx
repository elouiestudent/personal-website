import React, { Component } from 'react'

export default class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="experience" className="experience-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="faq-content mt-45">
                                <div className="experience-title">
                                    <h6 className="sub-title">Experience</h6>
                                    <h4 className="title">Where I've Worked</h4>    
                                </div> {/* faq title */}
                                <div className="experience-accordion">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Frequently Asked Question One</a>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                                </div>
                                            </div>
                                        </div> {/* card */}
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Frequently Asked Question Two</a>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                                </div>
                                            </div>
                                        </div> {/* card */}
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Frequently Asked Question Three</a>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                                </div>
                                            </div>
                                        </div> {/* card */}
                                        <div className="card">
                                            <div className="card-header" id="headingFore">
                                                <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseFore" aria-expanded="false" aria-controls="collapseFore">Frequently Asked Question Four</a>
                                            </div>
                                            <div id="collapseFore" className="collapse" aria-labelledby="headingFore" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                                </div>
                                            </div>
                                        </div> {/* card */}
                                        <div className="card">
                                            <div className="card-header" id="headingFive">
                                                <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Frequently Asked Question Five</a>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p className="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                                </div>
                                            </div>
                                        </div> {/* card */}
                                    </div>
                                </div> {/* faq accordion */}
                            </div> {/* faq content */}
                        </div>
                        <div className="col-lg-7">
                            <div className="experience-image mt-50">
                                <img src="assets/images/experience.jpg" alt="experience" />
                            </div> {/* faq image */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}