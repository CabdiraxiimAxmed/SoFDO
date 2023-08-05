import { BiSolidPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'

const Footer: React.FC = () => {
  return <div id="footer" className='footer-container'>
    <div className='org-info'>
      <h5> About Company </h5>
      <p>Somali Feeding and Development Organization (SoFDO) a national NGO, was founded in July 2012 in
        Mogadishu, Benadir region, Somalia as a Feeding and development organization by local Somali
        intellectuals and Diaspora Somali community members</p>
    </div>
    <div className='links'>
      <h5> Links </h5>
      <a href='#home'>Home</a>
      <a href='#vision-mission'>Vision/Mission</a>
      <a href='#objectives'>Objectives</a>
      <a href='#core-values'>Core Values</a>
      <a href='#approaches-development'>Approaches Of Development</a>
      <a href='#targets'>Target Groups</a>
      <a href='#footer'>Contact Us</a>
      <a href='/blog'>blog</a>
    </div>
    <div className='contact'>
      <h5> Contact Us </h5>
      <p> <BiSolidPhoneCall />  252 616409041 / 252 615184520 / 252 617462780</p>
      <p> <AiOutlineMail />  sofdo.som.org@gmail.com</p>
    </div>
  </div>
}

export default Footer;
