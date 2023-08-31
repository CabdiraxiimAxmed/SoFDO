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
import img29 from '../assets/showcase/29.jpeg';
import img30 from '../assets/showcase/30.jpeg';
import img31 from '../assets/showcase/31.jpeg';
import img32 from '../assets/showcase/32.jpeg';
import img33 from '../assets/showcase/33.jpeg';
import img34 from '../assets/showcase/34.jpeg';
import img35 from '../assets/showcase/35.jpeg';
import img36 from '../assets/showcase/36.jpeg';
import img37 from '../assets/showcase/37.jpeg';
import img38 from '../assets/showcase/38.jpeg';
import img39 from '../assets/showcase/39.jpeg';
import img40 from '../assets/showcase/40.jpeg';
import img41 from '../assets/showcase/41.jpeg';
import img42 from '../assets/showcase/42.jpeg';
import img43 from '../assets/showcase/43.jpeg';
import img44 from '../assets/showcase/44.jpeg';
import img45 from '../assets/showcase/45.jpeg';
import img46 from '../assets/showcase/46.jpeg';
import img47 from '../assets/showcase/47.jpeg';
import img48 from '../assets/showcase/48.jpeg';
import img49 from '../assets/showcase/49.jpeg';
import img50 from '../assets/showcase/50.jpeg';
import img51 from '../assets/showcase/51.jpeg';
import img52 from '../assets/showcase/52.jpeg';
import img53 from '../assets/showcase/53.jpeg';
import img54 from '../assets/showcase/54.jpeg';
import img55 from '../assets/showcase/55.jpeg';
import img56 from '../assets/showcase/56.jpeg';
import img57 from '../assets/showcase/57.jpeg';
import img58 from '../assets/showcase/58.jpeg';
import img59 from '../assets/showcase/59.jpeg';
import img60 from '../assets/showcase/60.jpeg';
import img61 from '../assets/showcase/61.jpeg';
import img62 from '../assets/showcase/62.jpeg';
import img63 from '../assets/showcase/63.jpeg';
import img64 from '../assets/showcase/64.jpeg';
import img65 from '../assets/showcase/65.jpeg';
import img66 from '../assets/showcase/66.jpeg';
import img67 from '../assets/showcase/67.jpeg';
import img68 from '../assets/showcase/68.jpeg';
import img69 from '../assets/showcase/69.jpeg';
import img70 from '../assets/showcase/70.jpeg';
import img71 from '../assets/showcase/71.jpeg';
import img72 from '../assets/showcase/72.jpeg';
import img73 from '../assets/showcase/73.jpeg';
import img74 from '../assets/showcase/74.jpeg';
import img75 from '../assets/showcase/75.jpeg';
import img76 from '../assets/showcase/76.jpeg';
import img77 from '../assets/showcase/77.jpeg';
import img78 from '../assets/showcase/78.jpeg';
import img79 from '../assets/showcase/79.jpeg';
import img80 from '../assets/showcase/80.jpeg';
import img81 from '../assets/showcase/81.jpeg';
import img82 from '../assets/showcase/82.jpeg';
const Showcase: React.FC = () => {
  let images = [
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
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
    img63,
    img64,
    img65,
    img66,
    img67,
    img68,
    img69,
    img70,
    img71,
    img72,
    img73,
    img74,
    img75,
    img76,
    img77,
    img78,
    img79,
    img80,
    img81,
    img82,
  ]
  images = images.sort( () => .5 - Math.random() )
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
