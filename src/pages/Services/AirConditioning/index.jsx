import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

const AirConditioning = () => {
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
                            <h1>Air Conditioning</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2>QUALIFIED SAUGEEN SHORES AND SURROUNDING AREA AIR CONDITIONING SERVICES</h2>
                                    <p>When the heat of summer is at its highest, you'll be glad you called Parker Heating & Cooling to make sure your air conditioning is at peak performance. Local to the Saugeen Shores and Surrounding area market, we know that having a working AC is almost a necessity to survive and our staff is ready to respond quickly so you don't suffer needlessly. Our capable team will quickly right the wrong and help you beat the heat. We offer the following air conditioning services:</p>
                                    <ul>
                                        <li>Air Conditioning Installation</li>
                                        <li>Air Conditioning Repair</li>
                                        <li>Air Conditioning Maintenance</li>
                                        <li>Coil and Blower Cleaning</li>
                                        <li>Duct and Vent Cleaning</li>
                                        <li>Filter Replacement</li>
                                        <li>Programmable Thermostats</li>
                                        <li>Emergency Response</li>
                                    </ul>
                                    <p>For proper air conditioning function, we advise our Saugeen Shores and Surrounding area customers to call at the earliest signs of trouble. In many cases, your AC's performance will slowly deteriorate, delivering less and less cold air. Our professional AC technicians have a knack for spotting the problem and fixing it before you're covered in sweat. In addition, scheduling regular air conditioning maintenance can prevent many problems from happening.</p>
                                    <p>If you're looking to upgrade to a new, more powerful air conditioner or just need to service the one you have, let Parker Heating & Cooling know and we'll be on the way. Our services are affordable, speedy, and designed to give you the most bang for your buck. Keep our number handy, 519-389-5391, and call us for all your air conditioning needs.</p>
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

export default AirConditioning;
