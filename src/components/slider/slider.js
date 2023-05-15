import React from "react";
import Slider from "react-slick";
import "./slider_s.scss";
import pan from "../img/panoram.jpg";
import pan2 from "../img/pan.jpg";
import pan3 from "../img/pan2.jpg";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
      <img className="pan1" src={pan}  alt="logo"></img>
      </div>
      <div>
      <img className="pan" src={pan3}  alt="logo"></img>
      </div>
      <div>
      <img className="pan" src={pan2}  alt="logo"></img>

      </div>
    </Slider>
  );
}