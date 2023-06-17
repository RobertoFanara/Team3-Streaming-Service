import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LastViewed.css";

const LastViewed = ({ lastViewed }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="last-viewed">
      <h3 className="text-white last-title">Last viewed</h3>
      {lastViewed.length > 0 ? (
        <Slider {...settings}>
          {lastViewed.map((lastViewed, index) => (
            <div key={index} className="carousel-item">
              <img
                src={lastViewed.cover}
                alt={lastViewed.title}
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

export default LastViewed;
