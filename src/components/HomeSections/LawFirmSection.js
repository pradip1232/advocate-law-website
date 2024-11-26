import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../img/Khapra law firm logo png 1.webp';

const LawFirmSection = () => {
    return (
        <Container className="my-5 introduction-section-home">
            <h2
                className="text-center mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl"
            >
                INTRODUCTION AND VALUE PROPOSITION
            </h2>

            <Row className="align-items-center">
                {/* Image Column */}
                <Col md={6} className="text-center mb-4 mb-md-0">
                    <img
                        src={logo}
                        alt="Khapra Law Firm Logo"
                        className="img-fluid"
                        style={{ maxWidth: '80%' }}
                    />
                </Col>

                {/* Text Content Column */}
                <Col md={6} className='about-intro-text-colmn-home'>
                    <h3>ABOUT THE FIRM</h3>
                    <p>
                        Welcome to Khapra Law Firm, where we believe that every legal challenge is an
                        opportunity for growth and resolution. With a dedicated team of experienced
                        lawyers and advocates, we specialize in providing personalized legal solutions
                        tailored to meet the unique needs of our clients.
                    </p>

                    <h3>VALUE PROPOSITION</h3>
                    <p>
                        At Khapra Law Firm, we understand that navigating the legal landscape can be
                        complex and daunting.
                    </p>

                    <Button variant="outline-dark" className='read-more-btn-home'>Read More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default LawFirmSection;
