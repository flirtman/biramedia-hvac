import React from 'react';
import {Container, Row, Col, Fade} from 'react-bootstrap';

import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";

import Img1 from '../../assets/images/gallery_about-us.jpg';
import Img2 from '../../assets/images/guarantee-customer-satisfaction.png';
import configs from "../../assets/configs";


import ServiceBoxes  from '../../components/ServiceBoxes';

const About = (props) => {
    return (
        <div className="page-wrapper">
            <MainNav/>
            <Container style={{'margin' : '50px  auto'}}>
                <div className="main-title">
                    <h1>About Us</h1>
                </div>
                <Row>
                    <Col md={4}>
                        <div className="image-wrap-right">
                            <img src={Img1} style={{'width' : '100%'}}/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <h2>{configs.companyName}</h2>
                        <p className="p-large">
                            We realize that mechanical systems today are far more
                            complex than ever and energy costs continue to rise.
                        </p>
                        <p>Nothing wears on homeowners like the idea of handling plumbing problems.
                            From the water heater to sewer line, we take the pressure off of you (and put it back in your shower lines).
                            Our plumbers are the most recognized professionals in the world because we’re committed to amazing service and
                            nothing wears on homeowners like the idea of handling plumbing problems. Nothing wears on homeowners
                            like the idea of handling plumbing problems.</p>
                        <p>Our plumbers are the most recognized professionals in the world because we’re committed to amazing service and
                            nothing wears on homeowners like the idea of handling plumbing problems. Nothing wears on homeowners
                            like the idea of handling plumbing problems.</p>

                        <img src={Img2} alt="" className="customer-satisfaction"/>
                        <div className="button-blue">
                            <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{margin: '50px auto'}}>
                <div className="main-title">
                    <h2>Our Services</h2>
                </div>
                <ServiceBoxes/>
            </Container>

            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default About;
