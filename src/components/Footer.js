import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import logo from './img/Khapra law firm logo white 1.webp';
function Footer() {
    return (
        <footer style={{ backgroundColor: '#3A1907', color: '#fff', padding: '30px 0' }}>
            <Container>
                <Row className="text-center text-md-start">
                    {/* Logo and Description */}
                    <Col xs={12} md={3} className="mb-4">
                        <img src={logo} />
                        <h4>KHAPRA LAW FIRM</h4>
                        <p>
                            Khapra Law Firm is a full-service law firm, providing you an extensive range of legal service.
                        </p>
                    </Col>

                    {/* Useful Links */}
                    <Col xs={12} md={3} className="mb-4">
                        <h5>USEFUL LINKS</h5>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>EXPERTISE</li>
                            <li>Our Team</li>
                            <li>News And Insights</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>Privacy & Security</li>
                            <li>Terms Of Use</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </Col>

                    {/* Contact Information */}
                    <Col xs={12} md={3} className="mb-4">
                        <h5>CONTACT US</h5>
                        <p><FaPhone /> +91 9911342966, +91 7850999966</p>
                        <p><FaMapMarkerAlt /> Address: Khapra Law Firm, Chamber No. 335 Lawyers Chamber Block, Rohini Courts, Rohini Delhi - 110085</p>
                        <p><FaMapMarkerAlt /> Office: Flat No. 76, Gulab Vihar Apartments, Sector-9, Rohini, Delhi - 110085</p>
                        <p><FaEnvelope /> khapralawfirm@gmail.com</p>


                    </Col>
                    {/* Contact Information */}
                    <Col xs={12} md={3} className="mb-4">

                        {/* Social Media Icons */}
                        <div className="d-flex justify-content-center justify-content-md-start mt-3">
                            <a href="#" className="text-white me-3"><FaFacebook /></a>
                            <a href="#" className="text-white me-3"><FaInstagram /></a>
                            <a href="#" className="text-white me-3"><FaWhatsapp /></a>
                            <a href="#" className="text-white"><FaTelegramPlane /></a>
                        </div>
                        <p><FaMapMarkerAlt /> Visiting hours:
                            Office: 10:00 aM To 7:00 PM All Days chamber:
                            10:00 AM TO 4:30 PM  expect for 2nd saturday and sunday

                        </p>


                    </Col>
                </Row>

                <Row className="text-center mt-4">
                    <Col>
                        <p>Made with love in India, powered by Squibfactory</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
