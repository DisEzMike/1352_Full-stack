import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides } : {slides: any[]}) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide, i) => {
        return <img src={slide.image} key={i} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
