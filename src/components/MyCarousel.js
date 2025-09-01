import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

// requires a loader



const MyCarousel = () => {
    return (

        <>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                showThumbs={false}
                swipeable={true}
                showStatus={false}

            >
                <div>
                    <img src="./Echo2EcoLogoDarkBG.png"
                        height={200}

                    />
                </div>
                <div>
                    <img src="./Echo2EcoLogoLightBG.png" height={200}
                    />
                </div>
                <div>
                    <img src="./E2ELoginLeftSide.png" height={200}
                    />
                </div>
            </Carousel>
        </>
    )


}

export default MyCarousel;