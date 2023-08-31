import React from 'react';
import { useNavigate } from 'react-router-dom';
import { home } from '../content.ts'

const Head: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (page: string) => {
    console.log("clicked");
     if(page == 'blog')
      navigate('/blog')
    else
      navigate('/showcase')
  }
 
  return (
    <div id="home" className="home-head-container">
      <div>
        <h1 style={{color: "white"}}>{home.title}</h1>
        <br/>
        <p> { home.subTitle }</p>
        <br/>
        <div className='home-head-buttons-container'>
        <button onClick={() => handleClick('blog')} className='learn-more-btn'> Read Articles </button>
        <button onClick={() => handleClick("showcase")} className='learn-more-btn' > Showcase </button>
        </div>
      </div>
    </div>
  );
}

export default Head;
