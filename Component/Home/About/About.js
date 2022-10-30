import Image from "next/image";
import React from "react";
import { aboutData } from "../../../data/data";
import styles from "./About.module.css";
import ProgressBar from "./ProgressBar";

const About = () => {
  // console.log(aboutData);
  return (
    <div className={styles.About} id="about">
      <h2>About Me</h2>
      <div className="ShapImg">
        <Image height="21" width="1308" src="/images/shap.svg" />
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.aboutMeImg}>
          <Image height="600" width="600" src="/images/about/maynddin.jpg" />
        </div>
        <div className={styles.aboutMeText}>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
        </div>
      </div>
      <div className={styles.aboutProgress}>
        <ProgressBar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.aboutSkill}>
              {aboutData.map((item, index) => (
                <div className={styles.Card} key={item?.id}>
                  <Image width="115" height="99" src={item?.img} />
                  <h3>{item?.title}</h3>
                  <p>{item?.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
