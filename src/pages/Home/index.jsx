import React from 'react';
import {Fade, Slide} from 'react-reveal';
import './styles.scss';
import MainNav from "../../components/MainNav";
import {Col, Row, Container} from 'react-bootstrap';

import Background from '../../assets/images/background_01.jpg';
import ImgBox1 from '../../assets/images/inner_11.jpg';
import ImgBox2 from '../../assets/images/inner_12.jpg';
import ImgBox3 from '../../assets/images/inner_13.jpg';

import ImgSales1 from '../../assets/images/phone-ring.png';
import ImgSales2 from '../../assets/images/worenty.png';
import ImgSales3 from '../../assets/images/lisence.png';

import inner_blue_02 from '../../assets/images/inner_blue_02.jpg';



import Brands from "../../components/Brands";
import BlueQuoteStripe  from '../../components/BlueQuoteStripe';
import ServiceBoxes  from '../../components/ServiceBoxes';
import configs from "../../assets/configs";

import SERVICE_LEGENDS from '../../assets/images/SERVICE-LEGENDS.jpg';
import OUR_GOAL from '../../assets/images/OUR-GOAL.jpg';
import OUR_CLIENTS from '../../assets/images/OUR-CLIENTS.jpg';
import OUR_PRIMARY_PURPOSE from '../../assets/images/OUR-PRIMARY-PURPOSE.jpg';

import BestHVACImg from '../../assets/images/air-conditioner-installation-Best-HVAC.jpg';


import AC_INSTALLATION from '../../assets/images/AC_INSTALLATION.jpg';
import AC_REPAIR from '../../assets/images/AC_REPAIR.jpg';
import AC_MAINTENANCE from '../../assets/images/AC_MAINTENANCE.jpg';

import Footer from '../../components/Footer';

const Home = (props) => {
    const setStyle={
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="container">
                    <div className="header-wrapper">
                        <div style={{maxWidth: '600px'}}>
                            <Fade left cascade>
                                <h1 className="">
                                    <span className="blue-text">Air Conditioning</span> <br/>Services
                                </h1>
                            </Fade>
                            <Fade>
                                <p className="">{configs.companyName} are here when you need us to service both your residential and comercial properties.</p>
                                <div className="">
                                    <div className="button-blue">
                                        <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                                    </div>
                                    <div className="button-white">
                                        <a href={`${process.env.PUBLIC_URL}/about`}>About Us</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Fade left cascade>
                        <ServiceBoxes/>
                    </Fade>
                    <Fade bottom>
                        <div className="sales-line-section">
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales1} alt=""/>
                                </div>
                                <p>AVAILABLE 24 HOURS</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales2} alt=""/>
                                </div>
                                <p>LICENSED & INSURED</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales3} alt=""/>
                                </div>
                                <p>WARRANTY & MAINTENANCE</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Fade bottom>
                    <div className="about-section">
                    <Slide left>
                        <div className="about-section-left">
                            <div className="about-section-left-content">
                                <h3>Who <span>We</span> Are</h3>
                                <p>{configs.companyName} core values are the pillars of our success.
                                    These values drive our daily decisions.</p>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={SERVICE_LEGENDS} alt=""/>
                                            </span>
                                            <span>
                                                <h4>SERVICE LEGENDS</h4>
                                                <p>Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, non euismod arcu ante quis massa.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_CLIENTS} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR GOAL</h4>
                                                <p>Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, non euismod arcu ante quis massa.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_GOAL} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR CLIENTS</h4>
                                                <p>Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, non euismod arcu ante quis massa.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_PRIMARY_PURPOSE} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR PRIMARY PURPOSE</h4>
                                                <p>Uisque molestie, arcu et iaculis mollis orci lacus facilisis pede, non euismod arcu ante quis massa.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="about-section-right" style={{backgroundImage: `url(${inner_blue_02})`}} >
                            <div className="about-section-right-content">
                                <h3>Trusted & Proud</h3>
                                <p>We have over 15 years experience in the air conditioning industry.</p>
                            </div>
                        </div>
                    </Slide>
                </div>
                </Fade>
                <div className="ac-section">
                    <Slide left>
                        <div className="ac-section-left" style={{backgroundImage: `url(${BestHVACImg})`}} >
                            <div className="ac-section-left-content">
                                {/*<h3>Trusted & Proud</h3>*/}
                                {/*<p>We have over 15 years experience in the air conditioning industry.</p>*/}
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="ac-section-right">
                            <div className="ac-section-right-content">
                                <h3><span>Air Conditioning</span> Services</h3>
                                <p>{configs.companyName} core values are the pillars of our success.
                                    These values drive our daily decisions.</p>
                                <Row>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_INSTALLATION} alt=""/>
                                            </span>
                                            <span>
                                                <h4>AC INSTALLATION</h4>
                                                <p>We install high efficiency residential and commercial air conditioning units.
                                                Contact us today to learn more about the multiple cooling system options.
                                                We also install Central Air, Variable Refrigerant Volume (VRV) and VRF systems.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_REPAIR} alt=""/>
                                            </span>
                                            <span>
                                                <h4>AC REPAIR</h4>
                                                <p>We are trained and extremely knowledgeable to help diagnose the
                                                issues you’re having – while providing an affordable solution.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_MAINTENANCE} alt=""/>
                                            </span>
                                            <span>
                                                <h4>AC MAINTENANCE</h4>
                                                <p>Your AC system should keep you cool in summer—without a big utility bill.
                                                NY Master Air Inc. can make sure the temperature inside your home is just right.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Slide>
                </div>
                <BlueQuoteStripe/>
                <Brands/>
                <Footer/>
            </div>
        </div>
    )
};

export default Home;
