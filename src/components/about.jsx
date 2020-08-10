import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="about" className="about-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-left-content mt-45">
                                <h6 className="sub-title">abouts</h6>
                                <h4 className="title">What Clients Says <br /> About Us</h4>
                                <ul className="about-line">
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                </ul>
                                <p className="text">Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum. <br /> <br /> ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
                            </div> {/* about left content */}
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right-content mt-50">
                                <div className="quota">
                                    <i className="lni lni-quotation" />
                                </div>
                                <div className="about-content-wrapper about-active">
                                    <div className="single-about">
                                        <div className="about-text">
                                            <p className="text">“Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.”</p>
                                        </div>
                                        <div className="about-author d-sm-flex justify-content-between">
                                            <div className="author-info d-flex align-items-center">
                                                <div className="author-image">
                                                    <img src="assets/images/author-1.jpg" alt="author" />
                                                </div>
                                                <div className="author-name media-body">
                                                    <h5 className="name">Mr. Jems Bond</h5>
                                                    <span className="sub-title">CEO Mbuild Firm</span>
                                                </div>
                                            </div>
                                            <div className="author-review">
                                                <ul className="star">
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                </ul>
                                                <span className="review">( 7 Reviews )</span>
                                            </div>
                                        </div>
                                    </div> {/* single about */}
                                    <div className="single-about">
                                        <div className="about-text">
                                            <p className="text">“Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.”</p>
                                        </div>
                                        <div className="about-author d-sm-flex justify-content-between">
                                            <div className="author-info d-flex align-items-center">
                                                <div className="author-image">
                                                    <img src="assets/images/author-2.jpg" alt="author" />
                                                </div>
                                                <div className="author-name media-body">
                                                    <h5 className="name">Mr. Jems Bond</h5>
                                                    <span className="sub-title">CEO Mbuild Firm</span>
                                                </div>
                                            </div>
                                            <div className="author-review">
                                                <ul className="star">
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                </ul>
                                                <span className="review">( 7 Reviews )</span>
                                            </div>
                                        </div>
                                    </div> {/* single about */}
                                    <div className="single-about">
                                        <div className="about-text">
                                            <p className="text">“Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl, sit amet convallis nunc turp.”</p>
                                        </div>
                                        <div className="about-author d-sm-flex justify-content-between">
                                            <div className="author-info d-flex align-items-center">
                                                <div className="author-image">
                                                    <img src="assets/images/author-3.jpg" alt="author" />
                                                </div>
                                                <div className="author-name media-body">
                                                    <h5 className="name">Mr. Jems Bond</h5>
                                                    <span className="sub-title">CEO Mbuild Firm</span>
                                                </div>
                                            </div>
                                            <div className="author-review">
                                                <ul className="star">
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                    <li><i className="lni lni-star-filled" /></li>
                                                </ul>
                                                <span className="review">( 7 Reviews )</span>
                                            </div>
                                        </div>
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