import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";

import './styles.scss';

const Heating = () => {
    const setStyle={
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Heating</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2>EFFECTIVE HEATING SERVICES IN SAUGEEN SHORES AND SURROUNDING AREA</h2>
                                    <p>Your Saugeen Shores and Surrounding area property's heating system is crucial - not only does it keep you warm during the colder winter months but it could also be responsible for delivering hot water and has a direct influence on the comfort of your space. Whether you're in the market for a new heat pump or simply need a competent furnace cleaning, Parker Heating & Cooling has the heating services designed to keep your system working right.</p>
                                    <ul>
                                        <li>Furnaces</li>
                                        <li>Heat Pumps</li>
                                        <li>Thermostats</li>
                                        <li>Heating System Installation</li>
                                        <li>Heating System Maintenance</li>
                                        <li>Heating System Repair</li>
                                        <li>In-Floor Heating</li>
                                        <li>Emergency Response</li>
                                    </ul>
                                    <p>Because Parker Heating & Cooling has been active in the Saugeen Shores and Surrounding area area for a long time, we understand the different options you have when it comes to heating and how to service each. Our service-oriented team has the knowledge necessary to complete everything from new heating installations to full service of your existing system. Our outstanding technicians, friendly attitude, and quality workmanship will help you realize your heating system's true potential.</p>
                                    <p>Don't get stuck in the cold. Let Parker Heating & Cooling make sure that your heating system is running optimally and up to the task of providing comfort in your Saugeen Shores and Surrounding area property despite the weather outside. Call 519-389-5391 for full details about our heating services and competitive prices.</p>
                                </Fade>
                            </Col>
                            <Col md={4}>
                                <Fade>
                                    <ServicesSider/>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <BlueQuoteStripe/>
                <Footer/>
            </div>
        </div>
    );
};

export default Heating;
