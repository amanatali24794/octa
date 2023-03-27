import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import SlideInOnScroll from '@/effects/SlideInOnScroll';

function Brands() {
    const data = Array.from({ length: 10 }, (_, index) => ({
        image: `/images/brand${(index % 3) + 1}.png`,
    }));
      


    return (
        <SlideInOnScroll
            initialTransform="translateY(50%)"
        >
            <div className="brands" style={{marginTop: "2rem", padding: "0 2rem"}}>
                <Carousel data={data} controlsCentered={true}/>
            </div>
        </SlideInOnScroll>
    )

}

export default Brands;

