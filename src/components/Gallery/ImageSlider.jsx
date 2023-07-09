import React from 'react'
import './ImageSlider.css';
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../../assets/Events/img1.jpeg'
import img2 from '../../assets/Events/img2.jpeg'
import img3 from '../../assets/Events/img3.jpeg'
import img4 from '../../assets/Events/img4.jpeg'
import img5 from '../../assets/Events/img5.jpeg'
import img6 from '../../assets/Events/img6.jpeg'
import img7 from '../../assets/Events/img7.jpeg'
import img8 from '../../assets/Events/img8.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
    const imageData = [
        {
            url:
                img1
        },
        {
            url:
                img2
        },
        {
            url: img3
        },
        {
            url:
                img4
        },
        {
            url:
                img5
        },
        {
            url:
                img6
        },
        {
            url: img7
        },
        {
            url:
                img8
        }
    ];

    const renderSlides = imageData.map((image) => (
        <div key={image.alt}>
            <img src={image.url} />
        </div>
    ));
    return (
        <div className='gallery'>
            <h1>Gallery</h1>
            <div className="slider_container">
                <div className="slider">
                    <Carousel
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        className="carousel-container"
                    >
                        {renderSlides}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider
