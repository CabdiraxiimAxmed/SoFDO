import React from 'react';
import { useNavigate } from 'react-router-dom';
import { home } from '../content.ts'

const Head: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/background')
  }
 
  return (
    <div id="home" className="home-head-container">
      <div>
        <h1>{home.title}</h1>
        <br/>
        <p> { home.subTitle }</p>
        <br/>
        <button onClick={handleClick} className='learn-more-btn'> Learn More </button>
      </div>
    </div>
  );
}

export default Head;
