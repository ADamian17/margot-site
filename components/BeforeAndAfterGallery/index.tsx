import React from "react";
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Container from "@/ui/Container";
import { rem } from '@mantine/core';

import styles from "./BeforeAndAfterGallery.module.scss";

type BeforeAndAfterGalleryType = {
  images: Record<"image", Record<"src" | "alt", string>>[];
};

const BeforeAndAfterGallery: React.FC<BeforeAndAfterGalleryType> = ({ images }) => {
  console.log(images);

  const slides = images.map((item, idx) => (
    <Carousel.Slide key={item.image.src + idx}>
      <Image
        src={item.image.src}
        alt={item.image.alt}
      />
    </Carousel.Slide>
  ))

  return (
    <Container isCentered>
      <Carousel loop withIndicators>
        {slides}
      </Carousel>
    </Container>
  )
};

export default BeforeAndAfterGallery;
