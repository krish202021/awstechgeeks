import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as Slide from "../API/LocalData";

function Slider(param) {
  const [img, setImg] = useState(param.img);
  console.log(param);

  return (
    <Carousel autoPlay={true} swipeable={true}>
      {
        // const imgs=param.img;
        Slide[param.img].map((item, index) => {
          console.log(item);
          return (
            <div>
              <div class="close-slider-btn"></div>
              <img
                src={
                  "img/web-app-slider/project-slides/" +
                  param.file +
                  "/" +
                  item.image
                }
              />
              {/* <p className="legend">Legend 1</p> */}
            </div>
          );
        })
      }
    </Carousel>
  );
}
export default Slider;
