import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StyledCarousel } from "./Carousel.styled";

const imageArray = ["img/testImage3.jpg", "img/testImage3.jpg", "img/testImage3.jpg"];

const CarouselComponent = () => {
  return (
    <StyledCarousel
      showArrows={false}
      emulateTouch={true}
      // showIndicators={true}
      showThumbs={false}
      dynamicHeight={false}
    >
      {imageArray.map((item, idx) => (

            <img key={idx} src={item} />

      ))}

    </StyledCarousel>
  );
};

export default CarouselComponent;
