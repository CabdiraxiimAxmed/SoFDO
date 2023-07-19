import { objectives } from '../content.ts';

const Objectives: React.FC = () => {
  return (
    <div id='objectives' className="objectives-container">
      <h1> What We Fight For </h1>
      <div className="objectives-cards">
        <div className='objective-card education'>
          <div className='objective-card-inner-container'>
            <h1>Education</h1>
            <p>{objectives.education}</p>
          </div>
        </div>
        <div className='objective-card food'>
          <div className='objective-card-inner-container'>
            <h1>Food</h1>
            <p>{objectives.food}</p>
          </div>
        </div>
        <div className='objective-card health'>
          <div className='objective-card-inner-container'>
            <h1>Health</h1>
            <p>{objectives.health}</p>
          </div>
        </div>
        <div className='objective-card training'>
          <div className='objective-card-inner-container'>
            <h1>Training</h1>
            <p>{objectives.training}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objectives;
