import poor from '../assets/icons/poverty.png';
import collaboration from '../assets/icons/collaboration.png';
import governance from '../assets/icons/governance.png';
import ethics from '../assets/icons/ethics.png';
import honest from '../assets/icons/honest.png';
import equity from '../assets/icons/equity.png';
import individuals from '../assets/icons/individuals.png';
import environment from '../assets/icons/environment.png';
import development from '../assets/icons/development.png';
import independence from '../assets/icons/independence.png';
const CoreValues: React.FC = () => {
  return <div className='core-values-container'>
    <h1>SoFDO CORE VALUES AND PRINCIPLES</h1>
    <br/>
    <div className='core-values-cards'>
      <div>
        <div className='core-values-card'>
          <img src={poor} />
          <p> Solidarity with the poor </p>
        </div>
        <div className='core-values-card'>
          <img src={individuals} />
          <p> Respects the unique and inherent worth of all individuals </p>
        </div>
        <div className='core-values-card'>
          <img src={ethics} />
          <p> Moral and ethical integrity </p>
        </div>
        <div className='core-values-card'>
          <img src={development} />
          <p> Community managed sustainable and impact-oriented development </p>
        </div>
        <div className='core-values-card'>
          <img src={equity} />
          <p> Fairness and Equity </p>
        </div>
      </div>
      <div style={{marginTop: "38px"}}>
        <div className='core-values-card'>
          <img src={independence} />
          <p> Independence </p>
        </div>
        <div className='core-values-card'>
          <img src={honest} />
          <p> Honesty, transparency and accountability to stakeholders. </p>
        </div>
        <div className='core-values-card'>
          <img src={collaboration} />
          <p> Communication and collaboration </p>
        </div>
        <div className='core-values-card'>
          <img src={environment} />
          <p> Environmentally conscious </p>
        </div>
        <div className='core-values-card'>
          <img src={governance} />
          <p> Good Governance </p>
        </div>
      </div>
    </div>
  </div>
}

export default CoreValues;
