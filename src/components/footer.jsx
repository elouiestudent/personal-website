import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="footer-area footer-dark">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="copyright text-center mt-35">
                                <p className="text">Designs from <a href="https://uideck.com" rel="nofollow">UIdeck</a> and <a rel="nofollow" href="https://ayroui.com">Ayro UI</a> and built by Elizabeth Louie</p>
                            </div> {/*  copyright */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
        );
    }
}