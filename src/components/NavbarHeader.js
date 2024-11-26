import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import logo from './img/Khapra law firm logo white 1.webp';
import { Helmet } from 'react-helmet';

function NavbarHeader() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/png" href={logo} />
            </Helmet>

            <Container fluid className="p-0">
                <Navbar
                    expand="lg"
                    variant="dark"
                    className={`navbar-header position-fixed ${scrolled ? 'scrolled' : ''}`}
                >
                    <Container fluid className="p-0">
                        <Row className="align-items-center w-100">
                            <Col md={2} className='logo-colmn'>
                                <Navbar.Brand href="/">
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        style={{
                                            width: scrolled ? '40px' : '130px',
                                            height: scrolled ? '40px' : '124px',
                                            transition: 'width 0.3s, height 0.3s',
                                           
                                        }}
                                    />
                                </Navbar.Brand>
                            </Col>
                            <Col md={10} className="text-end">
                                <Navbar.Toggle aria-controls="navbar-nav" />
                                <Navbar.Collapse id="navbar-nav">
                                    <Nav className="ms-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about">About Us</Nav.Link>
                                        <Nav.Link href="/expertise">Expertise</Nav.Link>
                                        <Nav.Link href="/our-team">Our Team</Nav.Link>
                                        <Nav.Link href="/news">News and Insights</Nav.Link>
                                        <Nav.Link href="/careers">Careers</Nav.Link>
                                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                <hr
                                    className={`navbar-bottom-line ${scrolled ? 'd-none' : ''}`}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}

export default NavbarHeader;
