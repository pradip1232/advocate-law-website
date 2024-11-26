import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import cc from '../img/criminal law 1.webp';

// Sample Data
const lawCategories = [
    { title: "Criminal Law", description: "We provide defense and prosecution ...", image: cc },
    { title: "Civil Law", description: "Handling civil litigation and settlements...", image: cc },
    { title: "Family Law", description: "Covering divorce, custody, alimony...", image: cc },
    { title: "Criminal Law", description: "We provide defense and prosecution ...", image: cc },
    { title: "Civil Law", description: "Handling civil litigation and settlements...", image: cc },
    { title: "Family Law", description: "Covering divorce, custody, alimony...", image: cc },
    { title: "Family Law", description: "Covering divorce, custody, alimony...", image: cc },
];

const LawCard = ({ title, description, image }) => {
    return (
        <div className="card text-white law-card">
            <img src={image} className="card-img" alt={title} style={{ height: '200px', objectFit: 'cover',borderRadius:'0' }} />
            <div className="card-img-overlay d-flex flex-column justify-content-end p-2 overlay-content">
                <div className="text-bg">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Button variant="" size="sm">See More...</Button>
                </div>
            </div>
        </div>
    );
};

const LawSectionCards = () => {
    return (
        <Container className="my-4 expertise-cards-section">
            <Row>
                {lawCategories.map((category, index) => (
                    <Col xs={12} sm={6} md={4} key={index} className="mb-2">
                        <LawCard title={category.title} description={category.description} image={category.image} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default LawSectionCards;
