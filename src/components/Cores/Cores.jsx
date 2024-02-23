import "./Cores.css"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Cores() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return ( 
        <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/200x200" alt="Placeholder 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/200x200" alt="Placeholder 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/200x200" alt="Placeholder 3" />
      </div>
      {/*<div id="cor" style={{backgroundColor: "red"}}/>*/}
    </Slider>
     );
}

export default Cores;