import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import left from '../img/Mask group 1.webp';
const ScheduleHome = () => {
    return (
        <>
            <Container className='schedule-container-home'>
                <Row>
                    <Col lg={6} md={6} xs={10}>
                        <img src={left} />
                    </Col>
                    <Col lg={6} md={6} xs={10}>
                        <h2>Get a Free Consultation at Khapra Law Firm!</h2>
                        <p>Navigating legal challenges can be daunting, but you don’t have to do  it alone. At Khapra Law Firm, we offer a free consultation to help you  understand your options and develop a plan of action tailored to your  needs.</p>
                        <p>Don’t let legal challenges overwhelm you. Take the first step towards  resolution today!</p>
                        <p>Call us at 7859999966 or click on button below.
                            We look forward to assisting you !</p>
                        <Button className='schedulebtn-home'>Schedule your Free Consultation</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default ScheduleHome
