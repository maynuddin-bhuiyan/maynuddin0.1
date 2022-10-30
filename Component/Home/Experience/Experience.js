import Image from "next/image";
import React from "react";
import { awardsData } from "../../../data/data";
import EarnedWolf from "../EarnedWolf/EarnedWolf";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.Experience} id="experience">
      <h2>My Experience</h2>
      <div className="ShapImg">
        <Image height="21" width="1308" src="/images/shap.svg" />
      </div>
      <div className="headerText">
        <p>
          Pellentesque aliquam tristique sed urna. Habitant id ullamcorper
          scelerisque quis risus scelerisque pretium. Nunc diam nunc scelerisque
          nullam.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className={styles.arcticWolf}>
            <h3>Arctic Wolf</h3>
            <h4>junior front end developer</h4>
            <h5>June 2022 - Present</h5>
            <p>
              Pellentesque aliquam tristique sed urna. Habitant id ullamcorper
              scelerisque quis risus scelerisque pretium. Nunc diam nuncsss
              scelerisque nullam.
            </p>
            <a href="https://apexdv.com/" target="_blank" rel="noreferrer">ApexDv</a>
            <p>London, England</p>
          </div>
          <div className={styles.awardsWolf}>
            <h3>Awards</h3>
            <div className={styles.awardsCard}>
              {awardsData?.map((item, index) => (
                <div className={styles.Card} key={item?.id}>
                  <h3>{item?.title}</h3>
                  <p>
                    {item?.text}{" "}
                    <a href={item?.link} target="_blank" rel="noreferrer">
                   Link
                    </a>
                  </p>
                  <h4>{item?.company}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.earnedWolf}>
            <EarnedWolf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
