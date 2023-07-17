import React from 'react';
import { home } from '../content.ts'

const Head: React.FC = () => {
  return (
    <div className="home-head-container">
      <div>
        <h1>{home.title}</h1>
        <br/>
        <p> { home.subTitle }</p>
        <br/>
        <button className='learn-more-btn'> Learn More </button>
      </div>
    </div>
  );
}

export default Head;
