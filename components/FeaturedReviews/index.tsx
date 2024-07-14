import React from "react";
import { Carousel } from '@mantine/carousel';

import Container from "@/ui/Container";
import ReviewCard from "../ReviewCard";

import '@mantine/carousel/styles.css';

import styles from "./FeaturedReviews.module.scss";


type FeatureReviewsType = {};

const FeaturedReviews: React.FC<FeatureReviewsType> = (props) => {
  return (
    <Container isCentered>
      <Carousel
        withIndicators
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={3}
      >
        <Carousel.Slide>
          <ReviewCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ReviewCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ReviewCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ReviewCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ReviewCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <ReviewCard />
        </Carousel.Slide>
      </Carousel>
    </Container>
  );
};

export default FeaturedReviews;
