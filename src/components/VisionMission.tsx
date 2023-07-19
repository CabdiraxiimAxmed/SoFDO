import { visionMission } from '../content.ts';

const VisionMission: React.FC = () => {
  return (
    <div id='vision-mission' className="vision-mission-container">
      <div className='vision'>
        <h1> Vision </h1>
        <br/>
        <p> {visionMission.vision} </p>
      </div>
      <div className='mission'>
        <h1> Mission </h1>
        <br/>
        <p> {visionMission.mission} </p>
      </div>
    </div>
  );
}

export default VisionMission;
