import React from "react";
import Link from "next/link"
  ;
import { Rating, Card, Text, Title, Anchor, Group } from "@mantine/core";
import { IconExternalLink } from '@tabler/icons-react';

type ReviewCardType = {
  name: string;
  rating: number;
  text: string;
  link: string;
};

const ReviewCard: React.FC<ReviewCardType> = ({ name, rating = 0, text, link }) => {
  return (
    <Card shadow="sm" padding="xl" radius="lg" withBorder>
      <Title mb="sm" order={2}>{name}</Title>

      <Rating value={rating} size="xl" readOnly mb="lg" />

      <Text
        size="md"
        c="dimmed"
        mb="sm"
        lineClamp={8}
        dangerouslySetInnerHTML={{ __html: text }}
      />

      <Anchor c="blue" href={link} component={Link} fw={500} target="_blank">
        <Group gap="xs" align="center">
          Read more
          <IconExternalLink size={16} />
        </Group>
      </Anchor>
    </Card>
  )
};

export default ReviewCard;
