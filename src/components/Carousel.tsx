import ReactSlick, { Settings } from "react-slick";
import styled from "styled-components";

const StyledSlider = styled(ReactSlick)`
  .slick-slide {
    padding-bottom: 10px;
  }
  .slick-dots {
    li {
      margin: 0;
    }
    button {
      &:before {
        color: #b7b7b7;
      }
    }
    .slick-active {
      button {
        &:before {
          color: #ed702d;
        }
      }
    }
  }
`;

interface Props {
  settings?: Settings;
  children: JSX.Element[];
}

const DEFAUT_SETTINGS: Settings = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  swipe: true,
  draggable: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = ({ settings = DEFAUT_SETTINGS, children }: Props) => {
  return (
    <div>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </div>
  );
};
export default Carousel;
