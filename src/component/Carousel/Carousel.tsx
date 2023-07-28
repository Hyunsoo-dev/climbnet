import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StyledCarousel } from "./Carousel.styled";

const CarouselComponent = () => {
  return (
    <StyledCarousel
      showArrows={false}
      emulateTouch={true}
      showIndicators={true}
      showThumbs={false}
    >
      <div>
        <img src="img/testImage1.jpg" />
      </div>
      <div>
        <img src="img/testImage1.jpg" />
      </div>
      <div>
        <img src="img/testImage1.jpg" />
      </div>
    </StyledCarousel>
  );
};

export default CarouselComponent;
