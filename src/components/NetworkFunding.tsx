import network from '../assets/icons/networking.png';
import funding from '../assets/icons/funding.png';

const NetworkFunding: React.FC = () => {
  return <div className='network-funding-container'>
    <div className='network-container'>
      <h1>Networking and Collaboration</h1>
      <p>SoFDO already created and maintains the collaboration of governmental, private, non-profit institutions
and communities at large in the targeted areas in Somalia to promote sustainable livelihoods among the
most vulnerable communities in both urban and rural areas.
SoFDO is a member of both national and zonal sector clusters in Food Security and Livelihoods,
Education, Nutrition as field level in Somalia. It has established cooperation with a number of Network
and Coalition bodies in the region</p>
      <img src={network} />
    </div>
    <div className='funding-container'>
      <h1>Funding Sources</h1>
      <p>The organization strives to rise funding from both the international and local donors to sustain its objectives
and activities. It has developed accountability and transparency mechanisms in conducting in its own
projects. The organization has very strict financial management policy, systems and control mechanisms. It
creates cooperation and working relationship with the local business people and the international donor
agencies.
It has fund-raising strategy plan that through program development proposals has so far attracted funds
from Somali Diaspora Communities</p>
      <img src={funding} />
    </div>
  </div>
}

export default NetworkFunding;
