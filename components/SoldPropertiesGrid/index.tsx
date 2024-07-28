import React from "react";
import dynamic from 'next/dynamic';

import Container from "@/ui/Container";
import { Group, SimpleGrid, Space, Text, Title } from "@mantine/core";
const ReviewCard = dynamic(() => import('../ReviewCard'), { ssr: false });

import styles from './SoldPropertiesGrid.module.scss';
import SoldProperty from "../SoldProperty";

type ReviewsGridType = {
  headline: string;
  subcopy: string;
};

const SoldPropertiesGrid: React.FC<ReviewsGridType> = ({ headline, subcopy }) => {
  return (
    <Container isCentered>
      <Group align="center" mb={200} justify="center">
        <h2 className={styles.headline}>{headline}</h2>
        <Space h="md" />
        <Text size="md" c="dimmed" style={{ textAlign: "center" }}>{subcopy}</Text>
      </Group>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        pb={10}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        <SoldProperty />
        <SoldProperty />
        <SoldProperty />
      </SimpleGrid>
    </Container>
  )
};

export default SoldPropertiesGrid;
