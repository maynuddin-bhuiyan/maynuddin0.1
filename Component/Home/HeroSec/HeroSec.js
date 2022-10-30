import Image from "next/image";
import React from "react";
import HeroCarousel from "../../HeroCarousel/HeroCarousel";
import styles from "./HeroSec.module.css";

const HeroSec = () => {
  return (
    <div className={styles.HeroSec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={styles.HeroSecImg}>
              <Image
                src="/images/heroSec/heroimg.svg"
                width="600"
                height="600"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={styles.HeroSecText}>
              <h3>
                <span>Hi</span> {"I'm"}
              </h3>
              <h2>Maynuddin Bhuiyan</h2>
              <h3>I work as A full-stack Web developer</h3>
              <p>Currently Im working at</p>
            </div>
            <HeroCarousel />
            <div className={styles.HeroSecBtn}>
              <button className="button">
                <a
                  href="https://drive.google.com/file/d/1_KIuP5xv7mjAucMsF99gi8nivWlUJVsS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Chack out my Work
                </a>
              </button>
              <button className="button">
                <a
                  href="https://drive.google.com/file/d/1_KIuP5xv7mjAucMsF99gi8nivWlUJVsS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  About Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
