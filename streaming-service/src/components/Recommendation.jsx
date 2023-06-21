import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Recommendation.css";

const Recommendations = ({ recommendations }) => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 2000) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 1,
        }));
      } else {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 2,
        }));
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="recommendations">
      <h3 className="text-white reccomendation-title">Recomendation</h3>
      {recommendations.length > 0 ? (
        <Slider {...settings}>
          {recommendations.map((recommendation, index) => (
            <div key={index} className="carousel-item">
              <img
                src={recommendation.cover}
                alt={recommendation.title}
                className="cover-image"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No recommendations at the moment.</p>
      )}
    </div>
  );
};

export default Recommendations;
