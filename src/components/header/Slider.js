import React, { Component } from "react";
import Slider from "react-slick";
import logo from './logo.png'
export default class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 4000,
            cssEase: "linear"
        };
        const imgage = [
            { uri: logo },
            { uri: logo },
            { uri: logo },
            { uri: logo }
        ]
        return (
            <div className='slider'>
                <Slider {...settings}>
                    {
                        imgage.map((item, i) => (
                            <div className='si' key={i}>
                                 <h4> {i} </h4>
                                 <img  src={item.uri}/>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        );
    }
}