import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ff from '../img/careers 2.webp';

function CareersSection() {
    return (
        <Container
            fluid
            className="text-center my-5 career_section"
            style={{
                backgroundImage: `url(${ff})`,
                backgroundSize: 'cover',          // Ensures the image covers the entire background
                backgroundPosition: 'center',     // Centers the background image
                backgroundRepeat: 'no-repeat',    // Prevents repeating the background image
                color: '#fff',
                height: '70vh'
            }}
        >
            <Row className="align-items-center  d-flex justify-content-center h-100">
                {/* Left Column */}
                <Col xs={12} md={5} className="p-5  bg-color-boy-img-color">
                    <h2>JOIN OUR TEAM AT KHAPRA LAW FIRM</h2>
                    <p>
                        At Khapra Law Firm, we believe that our strength lies in our people. We are committed to fostering a dynamic and inclusive workplace that encourages collaboration, innovation, and professional growth.
                    </p>
                    <Button variant="outline-light">Join the Team</Button>
                </Col>

                {/* Center Image */}
                <Col xs={12} md={2} className="p-0 d-none d-md-block">

                </Col>

                {/* Right Column */}
                <Col xs={12} md={5} className="p-5 text-left bg-color-boy-img-color">
                    <h2>INTERNSHIP OPPORTUNITIES</h2>
                    <p>
                        We are excited to offer internship opportunities for aspiring legal professionals who are eager to gain practical experience and insight into the legal profession.
                    </p>
                    <Button variant="outline-light" >Know More</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CareersSection;
