import React from "react";
import tp from './touristspots.json';
import './TouristSpots.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",color: "black",borderRadius:"48px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",color: "black",borderRadius:"48px" }}
      onClick={onClick}
    />
  );
}

function TouristSpots() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container">
      <h1 className='spotTitle'>Places to Visit at Jodhpur</h1>
      <Slider {...settings}>
        {tp.places.map((det) => {
          return (
            <>
              <div className='spotSlide'>
                <img src={det.img} alt={det.Name} key={det.img} />
                {det.name}
              </div>
            </>
          );
        })}
    </Slider>
    </div>
  );
}

export default TouristSpots