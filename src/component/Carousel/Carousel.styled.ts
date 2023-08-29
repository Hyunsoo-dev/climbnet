import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const StyledCarousel = styled(Carousel)`
  position: relative;
  
  height: 100%;
  .carousel.carousel-slider {
    height: 100%;
  }
  .carousel-status {
    top: 285px;
    right: 10px;
  }
`;
