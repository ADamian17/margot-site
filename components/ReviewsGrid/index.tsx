import React from "react";
import dynamic from 'next/dynamic';
import { IconInfoCircle, IconQuote } from '@tabler/icons-react';
import Container from "@/ui/Container";
import { Blockquote, Group, SimpleGrid, Space, Text, Title } from "@mantine/core";
const ReviewCard = dynamic(() => import('../ReviewCard'), { ssr: false });

import styles from './ReviewsGrid.module.scss';

type ReviewsGridType = {
  headline: string;
  subcopy: string;
  featuredReviewQuote: {
    quote: string;
    author: string;
  };
  reviews: {
    name: string;
    rating: number;
    text: string;
    link: string;
  }[];
};

const ReviewsGrid: React.FC<ReviewsGridType> = ({ reviews, headline, subcopy, featuredReviewQuote }) => {
  const icon = <IconQuote />;

  return (
    <Container isCentered>
      <Group align="center" mb={100} justify="center">
        <h2 className={styles.headline}>{headline}</h2>
        <Space h="md" />
        <Text size="md" c="dimmed" style={{ textAlign: "center" }}>{subcopy}</Text>

        <Space h="xl" />
        {
          featuredReviewQuote && (
            <Blockquote color="blue" cite={`– ${featuredReviewQuote?.author}`} icon={icon} mt="xl" iconSize={60} style={{ maxWidth: 800 }}>
              <Text size="lg" lineClamp={4}>{featuredReviewQuote?.quote}</Text>
            </Blockquote>
          )
        }
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
