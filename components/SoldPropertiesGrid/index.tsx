import React from "react";
import dynamic from 'next/dynamic';

import Container from "@/ui/Container";
import { Group, SimpleGrid, Space, Text, Title } from "@mantine/core";
import SoldProperty, { SoldPropertyProps } from "../SoldProperty";

import styles from './SoldPropertiesGrid.module.scss';

type ReviewsGridType = {
  headline: string;
  subcopy: string;
  properties: SoldPropertyProps[]
};

const SoldPropertiesGrid: React.FC<ReviewsGridType> = ({ headline, subcopy, properties }) => {
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
        {
          properties && properties.map((property, index) => (
            <SoldProperty key={property.propertyLink + index} {...property} />
          ))
        }
      </SimpleGrid>
    </Container>
  )
};

export default SoldPropertiesGrid;
