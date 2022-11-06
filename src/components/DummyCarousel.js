import React from "react";
// import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 768 },
    items: 1,
    partialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 768, min: 600 },
    items: 1,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide }
  } = rest;
  return (
    <div className="text-white">
      <div
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        Prev
      </div>
      <div onClick={() => next()}>Next</div>
      <div onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </div>
    </div>
  );
};

const DummyCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      arrows
      additionalTransfrom={0}
      itemClass={"react-carousel-item"}
      minimumTouchDrag={80}
      partialVisible
      renderButtonGroupOutside
      customButtonGroup={<ButtonGroup />}
    >
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
      {/* <img
        alt=""
        src="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <img
        alt=""
        src="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      /> */}
    </Carousel>
  );
}

export default DummyCarousel;