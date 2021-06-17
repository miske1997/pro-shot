import "./carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselManager = (props) => {
    return ( 
        <div className="carousel-container portfolio">
            <Carousel autoPlay={true}  interval={1500} showThumbs={false} showArrows={false} showStatus={false}>
                <div style={{backgroundImage : `url(${props.images[0]})`}}>
                    <div className="blur">
                        <img src={props.images[0]} />
                    </div>
                </div>
                <div style={{backgroundImage : `url(${props.images[1]})`}}>
                    <div className="blur">
                        <img src={props.images[1]} />
                    </div>
                </div >
                <div style={{backgroundImage : `url(${props.images[2]})`}}>
                    <div className="blur">
                        <img src={props.images[2]} />
                    </div>
                </div>
            </Carousel>
        </div>
     );
}
 
export default CarouselManager;