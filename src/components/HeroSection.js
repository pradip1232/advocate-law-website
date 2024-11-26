// src/components/HeroSection.js
import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import './css/header.css';
import LawFirmSection from './HomeSections/LawFirmSection';
import ExpertiseSectionTeam from './HomeSections/ExpertiseSectionTeam';
import WhyChooseUs from './HomeSections/WhyChooseUs';
import NewsInsight from './HomeSections/NewsInsight';
import CareersSection from './HomeSections/CareersSection';
import ScheduleHome from './HomeSections/ScheduleHome';

class HeroSection extends Component {
    render() {
        return (<>
            <section className="hero-section">
                {/* Overlay Navbar */}
                {/* <NavbarHeader /> */}

                {/* Hero Content */}
                <div className="hero-content hero-section-home text-center">
                    <h1>Empowering You Through Legal Challenges</h1>
                    <hr />
                    <p>Providing Dedicated Legal Support And Personalized Solutions To Meet Your Unique Needs.</p>
                    <button className="hero-button">Schedule a Consultation</button>
                </div>
            </section>



            <LawFirmSection />

            <ExpertiseSectionTeam />

            <WhyChooseUs />
            <NewsInsight />
            <CareersSection />
            <ScheduleHome />

        </>
        );
    }
}

export default HeroSection;
