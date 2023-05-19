import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import * as Slide from '../API/LocalData';

function Slider1(param) {

console.log(param)

    return (
        
        <Carousel>
            {
                // const flies=param.file;
                // const imgs=param.img;
                Slide.bolton_travel_business.map((item, index) => {
                    console.log(item)
                    return (
                        <div>
                            <img src={"img/web-app-slider/project-slides/"+param.file+"/"+item.image}/>
                            <p className="legend">Legend 1</p>
                        </div>
                    )
                })
            }


        </Carousel>
    );
};
export default Slider1