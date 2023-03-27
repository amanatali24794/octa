import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/About.module.css';
import SlideInOnScroll from '../../effects/SlideInOnScroll';

const About = () => {
  const [isCaptionVisible, setIsCaptionVisible] = useState(false);
  const [isBorderVisible, setIsBorderVisible]= useState(false);
  const captionRef = useRef(null);
  const borderRef= useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCaptionVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(captionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBorderVisible(entry.isIntersecting);
      },
      { threshold: 0}
    );

    observer.observe(borderRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (

    <div className={styles['about-container']}>
      <div className={styles['about-content']}>
        <SlideInOnScroll initialTransform={"translateX(-200px)"}>
          <h2>ABOUT US</h2>
        </SlideInOnScroll>
        <SlideInOnScroll initialTransform={"translateX(500px)"}>
          <p>The automobile industry has seen a radical change in the past decade. The advent of the digital age and the invention of artificial intelligence (AI) have revolutionized the way we drive and maintain our cars. Even though the new advancements have made a positive impact on the automobile industry’s quest for easing out many issues car owners had to face in the past, servicing, repair and maintenance are still very challenging. This is where the Otobucks App changes the way one looks at car after-sales services</p>
        </SlideInOnScroll>
        <SlideInOnScroll initialTransform={"translateX(-200px)"}>
          <div className={styles['about-stats']}>
            <div className={styles['about-stat']}>

              <p>RELIABLE</p>
            </div>
            <div className={styles['about-stat']}>

              <p>ONE-STOP SHOP</p>
            </div>
            <div className={styles['about-stat']}>

              <p>100% SATISFACTION</p>
            </div>
          </div>
        </SlideInOnScroll>
      </div>

      <div className={styles["about-image-container"]}>
        <div style={{ position: "relative", zIndex: 3 }}>
          <SlideInOnScroll
            initialTransform={"translateX(300px)"}

          >
            <img src="/images/about.webp" alt="About" />
          </SlideInOnScroll>
        </div>
        <div
          className={styles['about-image-caption']}
          ref={captionRef}
          style={isCaptionVisible ? {
            opacity: 1,
            transform: "translate(0, 0)",
            transition: "all 1s ease-out"
          } :
          {
            opacity: 0,
            transform: "translateY(80%)",
            transition: "all 1s  ease-out"
          }}
        >
          We Pay You For Using The App, The More You Use The More Money You EARN!
        </div>
        <div 
          className={styles['about-image-border']}
          style={isCaptionVisible ? {
            width: "100%",
            height: "100%",
            transform: "translate(0, 0)",
            transition: "all 1s ease-out"
          } :
          {
            width: "50%",
            height: "50%",
            transform: "translateY(20%)",
            transition: "all 1s  ease-out"
          }}
          ref={borderRef}
        >

        </div>
      </div>

    </div>
  );
};

export default About;
