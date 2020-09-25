import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

const WaterHeaters = () => {
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
                            <h1>Water Heaters</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h3>EFFICIENT SAUGEEN SHORES AND SURROUNDING AREA WATER DAMAGE RESPONSE</h3>
                                    <p>Contrary to popular belief, a hot water heater is not only about being able to take warm showers. While the exact setup may differ from property to property in Saugeen Shores and Surrounding area, a water heater can take on a variety of functions, such as providing heat through radiators, delivering hot water to your washing machine, and many more. When your water heater starts to struggle against the demand, Parker Heating & Cooling will send out a trained technician to identify the problem and fix it.</p>
                                    <ul>
                                        <li>Electric Water Heaters</li>
                                        <li>Gas Water Heaters</li>
                                        <li>Water Heater Installations</li>
                                        <li>Water Heater Repairs</li>
                                        <li>Water Heater Maintenance</li>
                                        <li>Tankless Water Heaters</li>
                                        <li>Storage Tanks</li>
                                        <li>Boiler Installation and Service</li>
                                    </ul>
                                    <p>For many in the greater Saugeen Shores and Surrounding area area, upgrading a property's water heater can make a great deal of sense. Even though top models are designed to last upwards of 15 years or more, the truth is that new advanced ones can save considerably on your utility bills. At Parker Heating & Cooling, we're well-acquainted with a vast array of both old and new water heaters and can provide the right advice about whether it's better to service your existing model or go for an upgrade.</p>
                                    <p>As a community resource in Saugeen Shores and Surrounding area, Parker Heating & Cooling provides quality hot water services that include installations, maintenance, repair, and more. Call 519-389-5391 to find out more about our hot water services.</p>
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

export default WaterHeaters;
