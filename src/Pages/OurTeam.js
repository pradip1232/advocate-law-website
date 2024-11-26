import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import ff from '../components/img/Group 7.webp';
const teamMembers = [
  { role: "CHAIRMAN", name: "DHARAMBIR SINGH KHAPRA" },
  { role: "SENIOR PARTNER", name: "PRAVESH DABAS" },
  { role: "SENIOR PARTNER", name: "NITESH KHAPRA" },
  { role: "ASSOCIATE", name: "JAYANT DABAS" },
  { role: "ATTORNEY", name: "MOHIT KUMAR" },
  { role: "LEGAL SECRETARY", name: "BHUMIKA GABA" },
  { role: "CONSULTANT", name: "AMAN GUPTA" },
  { role: "JUNIOR ASSOCIATE", name: "RAHUL MEHRA" },
  { role: "LEGAL ADVISOR", name: "KAVITA SINGH" },
  { role: "TRAINEE", name: "ROHAN SHARMA" },
  { role: "ADMIN MANAGER", name: "NEHA VERMA" },
  { role: "RESEARCHER", name: "PIYUSH GARG" },
  { role: "PARALEGAL", name: "SHIVANI MALIK" },
  { role: "PARALEGAL", name: "SHIVANI MALIK" },
];
const OurTeam = () => {
  return (
    <>
      <section className='team-section-container position-relative'>
        <img src={ff} className='img-fluid w-100' />
        <div className="contact-content our-team-content-first position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="display-4 fw-bold">MEET OUR TEAM</h1>
          <hr />
          <p className="lead">Home / Our Team</p>
        </div>
      </section>

      <section className='team cards-section'>
        <Container className="py-5">
          <Row className="g-4">
            {teamMembers.map((member, index) => (
             <Col key={index} md={4} sm={6} xs={12} className="d-flex justify-content-center">
             <Card 
               className="text-center border border-secondary slider-cards-our-team" 
               style={{ width: "18rem", height: "15rem" }}
             >
               <Card.Body className="d-flex flex-column justify-content-end">
                 <Card.Title className="fw-bold">{member.role}</Card.Title>
                 <Card.Text>{member.name}</Card.Text>
               </Card.Body>
             </Card>
           </Col>
           
            ))}
          </Row>
        </Container>
      </section>

    </>
  )
}

export default OurTeam
