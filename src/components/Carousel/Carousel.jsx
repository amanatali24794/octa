import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/Carousel.module.css';



const Carousel = ({ data, controlsCentered, indicatorBgColor}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perSlide, setPerSlide] = useState(3)


  const numSlides = Math.ceil(data.length / 3);

  const handleClick = (direction) => {
    const increment = direction === 'next' ? 1 : -1;
    setCurrentSlide((currentSlide + increment + numSlides) % numSlides);
  };

  const prevBtnRef= useRef(null)
  const nextBtnRef= useRef(null)
  const carouselInnerRef= useRef(null)
  useEffect(function(){
    if(controlsCentered){
      carouselInnerRef.current.style.position="relative"
      carouselInnerRef.current.style.width="90%"
      carouselInnerRef.current.style.margin="auto"
      carouselInnerRef.current.style.overflow="hidden"
      
      prevBtnRef.current.style.position="absolute"
      prevBtnRef.current.style.left=0;
      prevBtnRef.current.style.top="35%";
      nextBtnRef.current.style.position="absolute"
      nextBtnRef.current.style.right=0;
      nextBtnRef.current.style.top="35%";
    }
  },[])

  useEffect(function(){
    if(currentSlide==0)
      setTimeout(()=>{
        carouselInnerRef.current.style.overflow="hidden"
      }, 500)
    else
      
        carouselInnerRef.current.style.overflow="visible"
      
    }, [currentSlide])

  return (
    <div className={styles['carousel']}>
      <div className={styles['carousel-inner'] } ref={carouselInnerRef}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {[...Array(numSlides)].map((_, slideIndex) => (
          <div key={slideIndex} className={styles['carousel-slide']}>
            {data.slice(slideIndex * perSlide, slideIndex * perSlide + perSlide).map((item, index) => (
              <div key={index} className={styles['carousel-item']}>
                <img src={item.image} alt={item.heading} />
                <div className={styles['caption']}>
                  <h2><a href={item.link}>{item.heading}</a></h2>
                  <p><a href={item.link}>{item.description}</a></p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles['carousel-controls']}>
        <button 
          className={styles['carousel-button prev']} 
          onClick={() => handleClick('prev')}
          ref={prevBtnRef}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles['carousel-indicator']} >
          <div 
            className={styles['current-slide-indicator']} 
            style={{ 
              width: 100 / numSlides + "%", left: currentSlide * 100 / numSlides + "%", 
              backgroundColor: indicatorBgColor? indicatorBgColor: ""
            }}
              
          >
          </div>
        </div>
        <button 
          className={styles['carousel-button next']} 
          onClick={() => handleClick('next')}
          ref={nextBtnRef}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>

  );
};

export default Carousel;

