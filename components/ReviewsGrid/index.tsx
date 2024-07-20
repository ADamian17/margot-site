import React from "react";
import dynamic from 'next/dynamic';

import Container from "@/ui/Container";
import { Group, SimpleGrid, Space, Text, Title } from "@mantine/core";
const ReviewCard = dynamic(() => import('../ReviewCard'), { ssr: false });

type ReviewsGridType = {
  headline: string;
  subcopy: string;
  reviews: {
    name: string;
    rating: number;
    text: string;
    link: string;
  }[];
};

const ReviewsGrid: React.FC<ReviewsGridType> = ({ reviews, headline, subcopy }) => {
  return (
    <Container isCentered>
      <Group align="center" mb={200} justify="center">
        <Title order={2} size="h1" style={{ textTransform: "uppercase", letterSpacing: 8 }}>{headline}</Title>
        <Space h="md" />
        <Text size="md" c="dimmed" style={{ textAlign: "center" }}>{subcopy}</Text>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {
          reviews && reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))
        }
      </SimpleGrid>
    </Container>
  )
};

export default ReviewsGrid;
