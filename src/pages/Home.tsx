import React from 'react';
import Head from '../components/Head.tsx'
import VisionMission from '../components/VisionMission.tsx'
import Objectives from '../components/Objectives.tsx'
import CoreValues from '../components/CoreValues.tsx'
import ApproachesOfDevelopment from '../components/ApproachesOfDevelopment.tsx'
import ProgrammaticArea from '../components/ProgrammaticArea.tsx'
import Targets from '../components/Target.tsx'
import OrganizationalStructure from '../components/OrganizationalStructure.tsx'
import NetworkFunding from '../components/NetworkFunding.tsx'
import OrganizationalStrengths from '../components/OrganizationalStrengths.tsx'

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <Head />
      <VisionMission />
      <Objectives />
      <CoreValues />
      <ApproachesOfDevelopment />
      <ProgrammaticArea />
      <Targets />
      <OrganizationalStructure />
      <NetworkFunding />
      <OrganizationalStrengths />
    </div>
  );
}

export default Home;
