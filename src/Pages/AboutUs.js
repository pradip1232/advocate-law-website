import React from 'react'

import '../components/css/about.css';
import KnowAbout from '../components/AboutSections/KnowAbout'
import AtText from '../components/AboutSections/AtText';
import TabNavbarAbout from '../components/AboutSections/TabNavbarAbout';

const AboutUs = () => {
  return (
    <div>
      <KnowAbout />
      <AtText />
      <TabNavbarAbout />

    </div>
  )
}

export default AboutUs
