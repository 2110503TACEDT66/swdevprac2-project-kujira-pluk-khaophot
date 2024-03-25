"use client"
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function CarSlideShow({ picArray }: { picArray: Array<string> }) {
    if (!picArray || picArray.length === 0) {
        return null;
    }
    return (
        <div>
            <AliceCarousel autoPlay autoPlayInterval={3000}>
                {picArray.map((pic, index) => (
                    <div key={index}>
                        <img src={pic}
                            alt={`Product Picture ${index}`}
                            className="rounded-lg w-[80%] h-[100%] bg-black" />
                    </div>
                ))}
            </AliceCarousel>
        </div>
    )
}
