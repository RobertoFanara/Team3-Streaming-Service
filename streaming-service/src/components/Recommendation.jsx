import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Recommendation.css";

const Recommendations = ({ recommendations }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="recommendations">
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
