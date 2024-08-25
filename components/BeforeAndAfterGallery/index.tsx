import React from "react";
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Group, Image, Space, Text, rem, useMantineTheme } from "@mantine/core";
import Container from "@/ui/Container";

import styles from "./BeforeAndAfterGallery.module.scss";
import { useMediaQuery } from "@mantine/hooks";

type BeforeAndAfterGalleryType = {
  headline: string;
  subcopy: string;
  images: Record<"image", Record<"src" | "alt", string>>[];
};

const BeforeAndAfterGallery: React.FC<BeforeAndAfterGalleryType> = ({ images, headline, subcopy }) => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = images.map((item, idx) => (
    <CarouselSlide key={item.image.src + idx}>
      <Image
        src={item.image.src}
        alt={item.image.alt}
        style={{ maxHeight: "800px", objectFit: "contain" }}
      />
    </CarouselSlide>
  ))

  return (
    <Container isCentered>
      <Group align="center" mb={100} justify="center">
        <h2 className={styles.headline}>{headline}</h2>
        <Space h="md" />
        <Text size="md" c="dimmed" style={{ textAlign: "center" }}>{subcopy}</Text>
      </Group>

      <Carousel
        align="start"
        controlSize={70}
        loop
        nextControlIcon={<IconChevronRight />}
        previousControlIcon={<IconChevronLeft />}
        slideGap={{ base: rem(2), sm: 'xl' }}
        slideSize={{ base: '100%', sm: '50%' }}
        slidesToScroll={mobile ? 1 : 2}
        withIndicators
      >
        {slides}
      </Carousel>
    </Container>
  )
};

export default BeforeAndAfterGallery;
