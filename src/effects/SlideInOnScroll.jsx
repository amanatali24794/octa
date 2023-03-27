import React, { useRef, useEffect, useState } from "react";



const SlideInOnScroll = ({ children, initialTransform,  initialOpacity, afterTransorm}) => {
    const styles={
        initial: {
            position: "relative",
            opacity: initialOpacity? initialOpacity : 0,
            transform: initialTransform,
            transition: "all 1s ease-out",
        },
        isVisible: {
            opacity: 1,
            transform: afterTransorm? afterTransorm: "translate(0, 0)"
        }
    }
    
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        { threshold: .1 }
        );

        observer.observe(ref.current);

        return () => {
             observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{
                ...styles.initial,
                ...isVisible && styles.isVisible
            }}
            //className={`slide-in ${isVisible ? "is-visible" : ""}`}
        >
            {children}
        </div>
    );
};

export default SlideInOnScroll;
