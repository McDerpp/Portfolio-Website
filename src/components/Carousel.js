import React from 'react';
import { Carousel, Image } from 'antd';
import dummyPic from '../assets/dummyPic.jpg';
const contentStyle = {
    height: '350px',
    width: '100%',



};
const CarouselComponent = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div>
            <div>  <img style={contentStyle} src={dummyPic} alt="yuf" />
            </div>
            {/* <div><h3 style={contentStyle}>1</h3></div>
            <div><h3 style={contentStyle}>1</h3></div> */}
        </div>


        // <Carousel afterChange={onChange}>
        //   <div>
        //     <h3 style={contentStyle}>1</h3>
        //   </div>
        //   <div>
        //     <h3 style={contentStyle}>2</h3>
        //   </div>
        //   <div>
        //     <h3 style={contentStyle}>3</h3>
        //   </div>
        //   <div>
        //     <h3 style={contentStyle}>4</h3>
        //   </div>
        // </Carousel>
    );
};
export default CarouselComponent;