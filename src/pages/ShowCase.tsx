import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import img1 from '../assets/showcase/1.jpeg';
import img2 from '../assets/showcase/2.jpeg';
import img3 from '../assets/showcase/3.jpeg';
import img4 from '../assets/showcase/4.jpeg';
import img5 from '../assets/showcase/5.jpeg';
import img6 from '../assets/showcase/6.jpeg';
import img7 from '../assets/showcase/7.jpeg';
import img8 from '../assets/showcase/8.jpeg';
import img9 from '../assets/showcase/9.jpeg';
import img10 from '../assets/showcase/10.jpeg';
import img11 from '../assets/showcase/11.jpeg';
import img12 from '../assets/showcase/12.jpeg';
import img13 from '../assets/showcase/13.jpeg';
import img14 from '../assets/showcase/14.jpeg';
import img15 from '../assets/showcase/15.jpeg';
import img16 from '../assets/showcase/16.jpeg';
import img17 from '../assets/showcase/17.jpeg';
import img18 from '../assets/showcase/18.jpeg';
import img19 from '../assets/showcase/19.jpeg';
import img20 from '../assets/showcase/20.jpeg';
import img21 from '../assets/showcase/21.jpeg';
import img22 from '../assets/showcase/22.jpeg';
import img23 from '../assets/showcase/23.jpeg';
import img24 from '../assets/showcase/24.jpeg';
import img25 from '../assets/showcase/25.jpeg';
import img26 from '../assets/showcase/26.jpeg';
import img27 from '../assets/showcase/27.jpeg';
import img28 from '../assets/showcase/28.jpeg';
const Showcase: React.FC = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
  ]
  return <div>
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
      <Masonry gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{width: "100%", display: "block"}}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  </div>
}

export default Showcase;
