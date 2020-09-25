import React from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";
import ServicesSider from "../../components/ServicesSider";

import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const FAQ = (props) => {
    const setStyle={
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="faq-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="5">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="6">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="6">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="7">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="8">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="8">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="9">
                                            <LiveHelpIcon/> Question goes here?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="9">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Hello! I'm another Answer.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col md={4}>
                                <ServicesSider/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default FAQ;
