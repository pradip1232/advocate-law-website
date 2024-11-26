import React from 'react'
import '../components/css/contact.css';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import ff from '../components/img/AdobeStock_747091805 1.webp';
import loca from '../components/img/Screenshot 2024-10-17 115634 1.webp';


import vector from '../components/img/Vector-3.webp';
const ContactUs = () => {
    return (
        <>
            <section className="contact-container position-relative">
                <img src={ff} alt="News and Insights" className="img-fluid w-100" />
                <div className="contact-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
                    <h1 className="display-4 fw-bold">Get in Touch with Khapra Law Firm</h1>
                    <hr />
                    <p className="lead">Home / Contact</p>
                </div>
            </section>

            <section className='adrees-contact-cards'>
                <Container className="py-4 ">
                    <Row className="g-4">
                        {/* Address Card */}
                        <Col md={4} sm={12} className="d-flex align-items-stretch">
                            <Card className="text-center contact-cards shadow-sm border-1 flex-grow-1">
                                <Card.Body className="d-flex flex-column">
                                    <i
                                        className="bi bi-geo-alt-fill text-primary fs-3"
                                        style={{ marginBottom: "10px" }}
                                    ></i>
                                    <Card.Title className="fw-bold">ADDRESS</Card.Title>
                                    <Card.Text className="mt-auto">
                                        Address: Khapra Law Firm, Chamber No. 335<br />
                                        Lawyers Chamber Block, Rohini Courts, <br />
                                        Rohini Delhi - 110085
                                        <br />
                                        <br />
                                        Office: Flat No. 76, Gulab Vihar Apartments, <br />
                                        Sector-9, Rohini, Delhi - 110085
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Contact Card */}
                        <Col md={4} sm={12} className="d-flex align-items-stretch">
                            <Card className="text-center contact-cards shadow-sm flex-grow-1">
                                <Card.Body className="d-flex flex-column">
                                    {/* <img src={vector} /> */}
                                    <i
                                        className="bi bi-person-fill text-primary fs-3"
                                        style={{ marginBottom: "10px" }}
                                    ></i>
                                    <Card.Title className="fw-bold">CONTACT</Card.Title>
                                    <Card.Text className="mt-auto">
                                        +91 9911342966 <br />
                                        +91 7895999966 <br />
                                        khapralawfirm@gmail.com
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Visiting Hours Card */}
                        <Col md={4} sm={12} className="d-flex align-items-stretch">
                            <Card className="text-center contact-cards shadow-sm flex-grow-1">
                                <Card.Body className="d-flex flex-column">
                                    <i
                                        className="bi bi-clock-fill text-primary fs-3"
                                        style={{ marginBottom: "10px" }}
                                    ></i>
                                    <Card.Title className="fw-bold">VISITING HOURS</Card.Title>
                                    <Card.Text className="mt-auto">
                                        Office: 10:00 AM to 7:00 PM All Days<br />
                                        <br />
                                        Chamber: 10:00 AM to 4:30 PM <br />
                                        Except for 2nd Saturday and Sunday
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </section>

            <section>
                <Container className="py-5 online-container-contact">
                    <h2 className="text-center mb-4">ONLINE INQUIRY FORM</h2>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6} sm={12}>
                                <Form.Group controlId="fullName">
                                    <Form.Label>Full Name:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your full name" />
                                </Form.Group>
                            </Col>
                            <Col md={6} sm={12}>
                                <Form.Group controlId="phoneNumber">
                                    <Form.Label>Phone Number:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your phone number" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm={12}>
                                <Form.Group controlId="emailAddress">
                                    <Form.Label>Email Address:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email address" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm={12}>
                                <Form.Group controlId="subject">
                                    <Form.Label>Subject of Inquiry:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter subject of inquiry" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm={12}>
                                <Form.Group controlId="description">
                                    <Form.Label>Brief Description of Legal Issue:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Provide a brief description of your legal issue"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm={12}>
                                <Form.Group controlId="preferredContact">
                                    <Form.Label>Preferred Method of Contact (Phone/Email):</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter preferred method of contact"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col className="text-end">
                                <Button variant=" " className='submit-btn-contact' type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>


            <section className='location-section'>
                <img
                    src={loca}
                    alt="Location"
                    className="img-fluid w-100 rounded"
                />
            </section>

        </>
    )
}

export default ContactUs
