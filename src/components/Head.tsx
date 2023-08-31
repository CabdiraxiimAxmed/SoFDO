import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from 'react-router-dom';
import head1 from '../assets/images/head1.jpeg'
import head2 from '../assets/images/head2.jpeg'
import head3 from '../assets/images/head3.jpeg'
import head4 from '../assets/images/head4.jpeg'
import head5 from '../assets/images/head5.jpeg'
import head6 from '../assets/images/head6.jpeg'
import head7 from '../assets/images/head7.jpeg'
import head8 from '../assets/images/head8.jpeg'
import { home } from '../content.ts'

const Head: React.FC = () => {
  const navigate = useNavigate();

  const images: string[] = [
    head1,
    head2,
    head3,
    head4,
    head5,
    head6,
    head7,
    head8,
  ];

  const handleClick = (page: string) => {
    console.log("clicked");
     if(page == 'blog')
      navigate('/blog')
    else
      navigate('/showcase')
  }
 
  return (
    <div id="home" className="home-head-container">
      <div className='slide-container'>
        <SimpleImageSlider
          width={"100%"}
          height={"100%"}
          slideDuration={0.5}
          images={images}
          showBullets={false}
          showNavs={false}
          loop={true}
          autoPlay={true}
        />
      </div>
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
