import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { data } from "../../data/data";
import styles from "./HeroSec.module.css";

const HeroCarousel = () => {
  const settings = {
    autoplay: true,
    // autoplaySpeed: 2000,
    //   cssEase: "linear",
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.HeroCarousel}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className={styles.HeroCarouselCard} key={item?.id}>
            <div className={styles.Card}>
              <div className="row">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className={styles.CardImg}>
                    <Image width="250" height="200" src={item?.img} />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className={styles.CardText}>
                    <h2>{item?.title}</h2>
                    <p>{item?.text}</p>
                    <div className={styles.CardBtn}>
                      <button>
                        <a
                          href={item?.v_url}
                          target="_blank"
                          rel="noreferrer"
                          className="v_Button"
                        >
                          <i className="fa-solid fa-link"></i>
                          <span>Visit</span>
                        </a>
                      </button>
                      <button>
                        <a
                          href={item?.g_url}
                          target="_blank"
                          rel="noreferrer"
                          className="g_Button"
                        >
                          <i className="fa-brands fa-github"></i>
                          <span>Visit</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
