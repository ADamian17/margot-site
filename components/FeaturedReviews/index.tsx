"use client";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";

import Container from "@/ui/Container";
import ReviewCard from "../ReviewCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./FeaturedReviews.module.scss";


type FeatureReviewsType = {};

function SampleNextArrow(props: React.ComponentProps<"div">) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: React.ComponentProps<"div">) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const FeaturedReviews: React.FC<FeatureReviewsType> = (props) => {
  const settings: Settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1110,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  return (
    <Container isCentered>
      <Slider {...settings} className={styles.slider}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Slider>
    </Container>
  );
};

export default FeaturedReviews;
