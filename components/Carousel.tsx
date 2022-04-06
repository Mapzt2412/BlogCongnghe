import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import thumbnail from "../assets/thumbnail.jpeg"
import thumbnail2 from "../assets/thumbnail2.jpg"


export function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} prevIcon={false} nextIcon= {false}>

            <Carousel.Item>
                <div className="image-wrap">
                    <Image
                        className="d-block w-100"
                        src={thumbnail2}
                        alt="Four slide" 
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-wrap">
                    <Image
                        className="d-block w-100"
                        src={thumbnail}
                        alt="Four slide" 
                    />
                </div>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-wrap">
                    <Image
                        className="d-block w-100"
                        src={thumbnail2}
                        alt="Four slide" 
                    />
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-wrap">
                    <Image
                        className="d-block w-100"
                        src={thumbnail2}
                        alt="Four slide" 
                    />
                </div>
                

                <Carousel.Caption>
                    <h3>Four slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="image-wrap">
                    <Image
                        className="d-block w-100"
                        src={thumbnail2}
                        alt="Four slide" 
                    />
                </div>

                <Carousel.Caption>
                    <h3>Five slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}