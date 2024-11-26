import React from 'react'
import ff from '../components/img/AdobeStock_747091805 1.webp';
import '../components/css/newInsight.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import mask from '../components/img/Mask group 5.webp';
import fff from '../components/img/news insight 1.webp';
import LatestCardsSlider from '../components/NewsAndInsightSection/LatestCardsSlider';
import InsightCardSlider from '../components/NewsAndInsightSection/InsightCardSlider';
import OpinionCardSlider from '../components/NewsAndInsightSection/OpinionCardSlider';
const NewsAndInsights = () => {
    return (
        <>
            <section className="news-and-insight-container position-relative">
                <img src={ff} alt="News and Insights" className="img-fluid w-100" />
                <div className="news-and-insight-content position-absolute top-50 start-50 translate-middle text-center text-white px-3">
                    <h1 className="display-4 fw-bold">News and Insights</h1>
                    <hr />
                    <p className="lead">Home / News & Insights</p>
                </div>
            </section>

            {/* <section>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img src="https://picsum.photos/200/300" className="card-img-top
                                " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago
                                    </small></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



            <section className='news-second-container'>
                <Container>
                    <div className="d-flex flex-column flex-md-row g-4 align-items-center ">
                        {/* Text Column */}
                        <div className="col text-center text-md-start news-welconetext">
                            <h1>NEWS AND INSIGHT</h1>
                            <p>
                                Welcome to the News & Insights section of Khapra Law Firm, where we keep you informed
                                about the latest developments in the legal landscape. Our team of legal experts shares
                                updates, analysis, and thought leadership on key issues that impact our clients and the community.
                            </p>
                        </div>

                        {/* Image Column */}
                        <div className="col text-center">
                            <img src={fff} alt="News and Insight" className="img-fluid w-100 roundedd" />
                        </div>
                    </div>
                </Container>
            </section>



            <LatestCardsSlider />
            <InsightCardSlider />
            <OpinionCardSlider />

            <section className='insight-hightlight-bg'>
                <h1>Event Highlights</h1>
            </section>


            <section>
                <Container className='upcoming-webinar-container'>
                    <div className="d-flex flex-column flex-md-row g-4 align-items-center">
                        <div className="col text-center text-md-start">
                            <h1 className='upcoming-webinar'>Upcoming Webinar</h1>
                            <div className='upcoming-webinar-text-colmn'>
                                <h6 className='date-insight'>12/01/2020</h6>
                                <h2 className='heading-name'>Understanding Intellectual Property Rights</h2>
                                <p>Join us for a deep dive into intellectual property rights, where our specialists will cover the basics and answer your pressing questions.</p>
                            </div>
                            <div className='upcoming-webinar-text-colmn'>
                                <h6 className='date-insight'>08/12/2025</h6>
                                <h2 className='heading-name'>Understanding Intellectual Property Rights</h2>
                                <p>Join us for a deep dive into intellectual property rights, where our specialists will cover the basics and answer your pressing questions.</p>
                            </div>
                        </div>
                        <div className="col text-center img-md-start">
                            <img src={mask} alt="Upcoming Webinar" className="img-fluid w-
                            100 rounded" />
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container className='past-seminar-container'>
                    <h2 className='past-seminarheading'>Past Seminar</h2>
                    <Row>
                        <Col md={10}>
                            <date className='date-insight'>10/20/2020</date>
                            <h2 className='heading-name'>mployment Law Reforms</h2>
                            <p>Join us for a deep dive into intellectual property rights, where our specialists will cover
                                the basics and answer your pressing questions.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={10}>
                            <date className='date-insight'>10/20/2020</date>
                            <h2 className='heading-name'>mployment Law Reforms</h2>
                            <p>Join us for a deep dive into intellectual property rights, where our specialists will cover
                                the basics and answer your pressing questions.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={10}>
                            <date className='date-insight'>10/20/2020</date>
                            <h2 className='heading-name'>mployment Law Reforms</h2>
                            <p>Join us for a deep dive into intellectual property rights, where our specialists will cover
                                the basics and answer your pressing questions.</p>
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="subscribe-section py-4">
                <Container>
                    <Row className="align-items-center">
                        {/* Input Field */}
                        <Col md={8} xs={12} className="mb-3 mb-md-0">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                aria-label="Email"
                            />
                        </Col>

                        {/* Button */}
                        <Col md={4} xs={12} className="text-center text-md-start">
                            <Button className="w-100 w-md-auto subdcribe-button" variant="">
                                Subscribe
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default NewsAndInsights
