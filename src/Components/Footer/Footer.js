import React from 'react'
import './Footer.css'
import college_Info from './college-info.json'
import SponsorsBanner from '../Sponsors/Sponsors_banner'
const Footer = (props) => {
    return (
        <div>

                <footer
                    className="text-center text-lg-start text-white">
                    <div className="container p-2 pb-0">
                        <hr />
                        <section className="">
                            <div className="row">
                                <div className="col-lg-5 col-md-2 mb-4 mb-md-0">
                                    <h2 className="text-uppercase">{props.Name}</h2>

                                    <p>
                                        Department of Chemical Engineering <br />
                                        Indian Institute of Technology Jodhpur<br />
                                        NH 65 Nagaur Road<br />
                                        Karwar 342030,Jodhpur Rajasthan
                                    </p>
                                </div>


                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 quick-links">
                                    <h5 className="text-uppercase">Quick Links</h5>
                                    <ul className="list-unstyled mb-3">

                                        {
                                            college_Info.Webites.map((det) => {
                                                return (
                                                    <li key={det.url}>
                                                        <a href={det.url} target="_blank" rel="noopener noreferrer" className="text-white mb-3">{det.Name}</a>
                                                    </li>
                                                )
                                            })

                                        }
                                    </ul>
                                        {
                                        college_Info.social_links.map((det) => {
                                            return (
                                                <a
                                                    className="btn btn-outline-light btn-floating m-1"
                                                    href={det.url} target="_blank" rel="noopener noreferrer" key={det.url}
                                                ><img src={det.logo} alt={det.Name} /></a>
                                            )
                                        })
                                    }
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 contact-link">
                                    <h5 className="text-uppercase">Contact Us</h5>
                                    {
                                        college_Info.social_links.map((det) => {
                                            return (
                                                <a
                                                    className="btn btn-outline-light btn-floating m-1"
                                                    href={det.url} target="_blank" rel="noopener noreferrer" key={det.url}
                                                ><img src={det.logo} alt={det.Name} /></a>
                                            )
                                        })
                                    }

                                    <div>

                                        <h6 className="my-3" >
                                            +91-291-2801702<br />
                                            office_che@iitj.ac.in

                                        </h6>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <hr className="mb-2" />

                        <section className="">
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <h4>Our Sponsors</h4>
                                    <SponsorsBanner/>
                                </div>
                            </div>
                        </section>

                        <hr className="mb-2" />
                    </div>

                    <div
                        className="text-center p-1">
                        © 2022 Copyright {props.Name}
                    </div>
                </footer>
            </div>
    )
}
export default Footer
Footer.defaultProps = {
    Name: "Chemical Event"
}
