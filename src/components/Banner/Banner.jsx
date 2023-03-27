import React, { useRef, useEffect, useState } from 'react';
import SlideInOnScroll from '../../effects/SlideInOnScroll';
import styles from '@/styles/Banner.module.css';


function Banner() {

    const [isImgVisible, setIsImgVisible] = useState(true)
    const [isManImgVisible, setIsManImgVisible] = useState(true)
    const [isCircleImgVisible, setIsCircleImgVisible] = useState(true)


    const cornerImgRef = useRef(null)
    const manImgRef = useRef(null);
    const circleImgRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsImgVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(cornerImgRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("setting man image to ", entry.isIntersecting)
                setIsManImgVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(manImgRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsCircleImgVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(circleImgRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={styles["banner-container"]}>
            <div className={styles['banner-content']}>
                <SlideInOnScroll
                    initialTransform="translateX(-500px)"
                >
                    <h1>WE PROVIDE QUALITY SERVICES</h1>
                </SlideInOnScroll>


                <SlideInOnScroll
                    initialTransform="translateX(500px)"
                >
                    <p>We're one of the biggest automotive service directories online, providing services for all types of cars. We have a number of trusted workshops and suppliers across the UAE. We connect you to the most reliable car mechanics and workshops within minutes!</p>
                </SlideInOnScroll>

                <SlideInOnScroll initialTransform="translateX(100px)">
                    <button className={`${styles.btn} ${styles['btn-primary']}`}>Learn More</button>
                </SlideInOnScroll>
            </div>
            <div className={styles['banner-images']}>

                <img

                    style={isCircleImgVisible ? {
                        opacity: 1,
                        transform: "translate(0, 0)",
                        transition: "all .5s ease-out"
                    } :
                        {
                            opacity: 0,
                            transform: "translateX(-10%)",
                            transition: "all 1s  ease-out"
                        }}
                    ref={circleImgRef}
                    className={styles["banner-circle-image"]}
                    src="/images/banner-circle.png">
                </img>
                <img

                    style={isManImgVisible ? {
                        opacity: 1,
                        transform: "translate(0, 0)",
                        transition: "all .5s ease-out"
                    } :
                        {
                            opacity: 0,
                            transform: "translateY(80%)",
                            transition: "all 1s  ease-out"
                        }}
                    ref={manImgRef}
                    className={styles["banner-man-image"]}
                    src="/images/car.png"

                >
                </img>
                <img
                    style={isImgVisible ? {
                        opacity: 1,
                        transform: "translate(0, 0)",
                        transition: "all .5s ease-out"
                    } : {
                        opacity: 0,
                        transform: "translate(40%, -40%)",
                        transition: "all 1s  ease-out"
                    }}
                    ref={cornerImgRef}
                    className={styles["banner-corner-image"]}
                    src="/images/slider-s1.png"
                ></img>


            </div>
        </div>
    );
}

export default Banner;
