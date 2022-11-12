import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { serviceData } from '../../../data/data';
import styles from "./FeaturedProject.module.css";

const MainFeatured = () => {
    const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.query.page) {
      setCurrentPage(Number(router.query.page));
    } else {
      setCurrentPage(0);
    }
  }, [router.query.page]);
    return (
        <div className={styles.featuredProject} id="protfolio">
      <h2>Some Thing I Built</h2>
      <div className="ShapImg">
        <Image height="21" width="1308" src="/images/shap.svg" />
      </div>
      <div className="container">
        <div className="row">
          <div className={styles.projectCard}>
            {serviceData[currentPage]?.data?.map((item, i) => (
              <div
                className="col-lg-12 col-md-12 col-sm-12 d-flex"
                key={item?.id}
                id={styles.projectCard}
              >
                <div className="col-lg-5 col-md-4 col-sm-12 me-3" key={item?.id}>
                  <div className={styles.cardText}>
                    <h3>{item?.title}</h3>
                    <h4>{item?.subtitle}</h4>
                    <div className={styles.projectText}>
                      <p>{item?.text}</p>
                    </div>
                    
                    <div className={styles.projectDes}>
                      <h5>Frontend Skills: </h5>
                      <p>{item?.frontendSkills}</p>
                    </div>
                    <div className={styles.projectDes}>
                      <h5>Backend Skills: </h5>
                      <p>{item?.backendSkills}</p>
                    </div>
                    <div className={styles.projectDes}>
                      <h5>Authentication: </h5>
                      <p>{item?.authentication}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-8 col-sm-12" key={item?.id}>
                  <div className={styles.projectImage}>
                    <Image width="740" height="400" src={item?.img} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="v_Button">
            <Link href="/featuredProject"
                  rel="noreferrer" > 
                  see more
                  </Link>
          </button>

          </div>
          </div>
          </div>
    );
};

export default MainFeatured;