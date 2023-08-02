import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StyledCarousel } from "./Carousel.styled";

const CarouselComponent = () => {
  return (
    <StyledCarousel
      showArrows={false}
      emulateTouch={true}
      // showIndicators={true}
      showThumbs={false}
    >

      <div>
        <img src="/img/testImage2.jpg" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      {/*<img src="../../asset/testImage/testImage9.jpg" />*/}
      {/*<img src="../../asset/testImage/testImage9.jpg" />*/}
      {/*<img src="img/testImage9.jpg" />*/}
      {/*<div>*/}
      {/*  <img src="img/testImage5.jpg" />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <img src="img/testImage5.jpg" />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <img src="img/testImage5.jpg" />*/}
      {/*</div>*/}
    </StyledCarousel>
  );
};

export default CarouselComponent;
