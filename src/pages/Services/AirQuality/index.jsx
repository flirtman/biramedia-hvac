import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

const AirQuality = () => {
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
                            <h1>Air Quality</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2>AIR QUALITY SERVICES IN SAUGEEN SHORES AND SURROUNDING AREA</h2>
                                    <p>With people in Saugeen Shores and Surrounding area spending more and more time indoors, the topic of air quality has never been more important and the EPA has listed poor air quality as one of the five biggest risks to public health. To solve the problem of poor air in Saugeen Shores and Surrounding area, Parker Heating & Cooling has developed a complete offering of air quality services designed to help you breathe better, stay healthy, and live more comfortably.</p>
                                    <ul>
                                        <li>Air Duct Cleaning</li>
                                        <li>Dryer Vent Cleaning</li>
                                        <li>Humidifiers</li>
                                        <li>Dehumidifiers</li>
                                        <li>Air Purification Systems</li>
                                        <li>UV Germicidal Lights</li>
                                        <li>Air Filter Replacements</li>
                                        <li>Air Quality Assessment</li>
                                    </ul>
                                    <p>In dealing with the issue of air quality, the service technicians at Parker Heating & Cooling have undergone extensive training both to understand the problem and to know the right steps to deal with it. Their experience and knowledge of the subject make them an expert resource for those living in Saugeen Shores and Surrounding area. With our help, you'll be able to improve the air quality in your property and stop worrying about pollen, mold, allergens, and other irritants.</p>
                                    <p>You may think that simply buying new equipment may solve your air quality issue, but contracting Parker Heating & Cooling is a much better solution. Not only will we clean your ducts and vents, but will also provide a full examination of your property to determine the most efficient and effective solution. Call 519-389-5391 to speak to an air quality expert about the options available for improving the air you breathe indoors.</p>
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

export default AirQuality;
