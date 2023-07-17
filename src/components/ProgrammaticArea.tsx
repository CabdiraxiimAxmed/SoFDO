import agriculture from '../assets/icons/agriculture.png';
import education from '../assets/icons/education.png';
import nutrition from '../assets/icons/nutrition.png';

const ProgrammaticArea: React.FC = () => {
  return <div className='programmatic-area-container'>
    <br/>
    <h1> Focused Programmatic Area </h1>
    <br/>
    <p>SoFDO focuses on two core program areas primarily integrated into the other coreprogram areas.</p>
    <br />
    <div>
      <div className='focused-programmatic-card'>
        <h5>Agriculture and Livelihoods Programm</h5>
        <img src={agriculture} />
        <p>Protect and improve household food security, including asset base, through increasing access and
  availability to food and means of production.</p>
      </div>
      <div className='focused-programmatic-card'>
        <h5>Formal Education</h5>
        <img src={education} />
        <p>Facilitate the availability of adequate and relevant basic education materials, kits and supplies.</p>
      </div>
      <div className='focused-programmatic-card'>
        <h5>Nutrition Program</h5>
        <img src={nutrition} />
        <p>The overall objectives is to lower the incidence of malnutrition, avert excess mortality due to malnutrition
and promote better nutritional status among populations in the affected areas.</p>
      </div>
    </div>
  </div>
}

export default ProgrammaticArea;
