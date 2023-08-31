import people from '../assets/images/people_to_work.jpeg';
import mogadishu from '../assets/images/mogadishu.jpg';

const Target: React.FC = () => {
  return <div id='targets' className='targets-container'>
    <br/>
    <br/>
    <div className='target-people-area-container'>
      <div className='content'>
        <h1>Target Groups</h1>
        <p>SoFDO Feeding and development programs aim for the most vulnerable community groups including:
IDPs, returnees, pastoral drop-outs and other vulnerable groups in Somalia.</p>
      </div>
      <img src={people} />
    </div>
    <br/>
    <br/>
    <br/>
    <div className='target-people-area-container'>
      <img src={mogadishu} />
      <div className='content'>
        <h1>SoFDO SPECIFIC AREA OF OPERATION</h1>
        <p>SoFDO operations concentrate on administrative regions and districts in South-Central Somalia. The
organization headquarter is in Mogadishu and plans to open other sub-offices in the main towns in South-
Central Somalia. It initially has the access of through its programs in Benadir, Middle and Lower Shebelle,
and Hiran regions.</p>
      </div>
    </div>
  </div>
}

export default Target;
