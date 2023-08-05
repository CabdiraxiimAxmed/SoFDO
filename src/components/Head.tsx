import React from 'react';
import { useNavigate } from 'react-router-dom';
import { home } from '../content.ts'

const Head: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate('/blog')
  }
 
  return (
    <div id="home" className="home-head-container">
      <div>
        <h1 style={{color: "white"}}>{home.title}</h1>
        <br/>
        <p> { home.subTitle }</p>
        <br/>
        <button onClick={handleClick} className='learn-more-btn'> Read Articles </button>
      </div>
    </div>
  );
}

export default Head;
