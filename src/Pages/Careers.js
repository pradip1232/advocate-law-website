import React from 'react'

import ff from '../components/img/9 1.webp';
import { Card, Col, Container, Row } from 'react-bootstrap';
import int from '../components/img/internship 1.webp';

import mask from '../components/img/Mask group 2.webp';
import '../components/css/career.css';
import ww from '../components/img/why choose us img 1.webp';



// clickedText = {
//     text :'We foster an environment that encourages continuous learning and career development. Whether you're just starting your legal career or you're an experienced professional, you'll have the opportunity to grow with us.',
// }

const Careers = () => {
    return (
        <>
            <section className='career-section position-relative'>
                <img src={ff} className='img-fluid w-100' />
                <div className="career-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
                    <h1 className="display-4 fw-bold">Shape Your Future with Khapra Law Firm</h1>
                    <hr />
                    <p className="lead">Home / Careers</p>
                </div>


            </section>

            <section className='container-section-career'>
                <div className='container'>
                    <div className=" row justify-content-center career-opp-container">
                        <div className="col-md-6 text-left justify-content-center aligns-center firstcolmn-career-pages">
                            <h2>Career Opportunities at Khapra Law Firm</h2>
                            <p>At Khapra Law Firm, our success is built on the dedication and expertise of our team. We are passionate about creating a collaborative, inclusive, and dynamic workplace where every team member can thrive, grow, and make a meaningful impact. If you are driven, compassionate, and committed to excellence, we invite you to explore the exciting career opportunities with us.</p>
                        </div>
                        <div className="col-md-6 text-center seconds-colmn-career-pages">
                            <img src={mask} />
                        </div>
                    </div>
                </div>
            </section>






            <section className="why-join-career-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Card className="p-2 why-card-career border dots-on-border">
                                <div className="image-container-career position-relative">
                                    <img src={ww} className="img-fluid w-100" alt="Card image" />
                                    <div className="overlay-text">
                                        <h5 className="text-whitee">We foster an environment that encourages continuous learning and career development. Whether you're just starting your legal career or you're an experienced professional, you'll have the opportunity to grow with us.</h5>
                                    </div>
                                </div>


                                {/* Dots outside the card */}
                                <div className="dot first">
                                    <span>Professional Growth</span>
                                </div>
                                <div className="dot second">
                                    <span>Collaborative Environment</span>
                                </div>
                                <div className="dot third">
                                    <span>Diverse Practice Areas</span>
                                </div>
                                <div className="dot fourth">
                                    <span>Client-Centered Approach</span>
                                </div>


                            </Card>
                        </Col>


                    </Row>
                </Container>
            </section>

























            <section className='cuerrnt-section '>
                <Container>
                    <h2 className='current-opening-heading'>Current Openings</h2>
                    <Row className='current-opening-row'>
                        <Col md={10}>
                            <h2>Associate Attorney</h2>
                            <ul>
                                <li>Associate Attorney</li>
                                <li>Requirements: degree of LLB, Enrolment With Bar Counsil Of Delhi and 2+ years of legal experience.</li>
                            </ul>
                        </Col>
                        <hr />

                    </Row>
                    <Row className='current-opening-row'>
                        <Col md={10}>
                            <h2>Legal Assistant</h2>
                            <ul>
                                <li>Provide administrative support to attorneys and manage client communications</li>
                                <li>Requirements: Strong organizational skills, Drafting skills, attention to detail, and excellent communication abilities.</li>
                            </ul>
                        </Col>
                        <hr />

                    </Row>
                </Container>

            </section>

            <scetion className='intership-container-apply'>
                <Container>
                    <Row>
                        <Col md={6} className='text-center'>
                            <img src={int} className='img-fluid' />
                        </Col>
                        <Col md={6} className='seconds-internship-program'>
                            <div>
                                <h2>Internship Program</h2>
                                <p>We are proud to offer internships for aspiring legal professionals. Our internship program provides practical, hands-on experience, allowing interns to work closely with experienced attorneys, gain insight into various legal processes, and develop their skills in a supportive environment​.</p>
                            </div>
                            <div>
                                <h2>How to Apply</h2>
                                <p>To apply for any position or internship at Khapra Law Firm, please submit your resume and a cover letter to <b> khapralawfirm@gmail.com </b>. In your cover letter, tell us about your interests, qualifications, and why you’d be a great fit for our team. We look forward to welcoming new talent into our Khapra Law Firm family.​.</p>
                            </div>

                        </Col>
                    </Row>
                </Container>

            </scetion>

            <Container className='join-container-section'>
                <Row className='text-center d-flex justify-content-center'>
                    <Col md={10}>
                        <h2>
                            Join the Team That Cares
                        </h2>

                        <p>When you join Khapra Law Firm, you become part of a team that values integrity, compassion, and excellence. Whether you're a seasoned professional or a new graduate, we provide a supportive environment where your contributions will make a difference.</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Careers
