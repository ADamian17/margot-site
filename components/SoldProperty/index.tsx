import React from "react";
import { Badge, Button, Card, CardSection, Group, Image, Overlay, Text } from "@mantine/core";

import styles from "./SoldProperty.module.scss";

const SoldProperty: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
        <div className={styles.badge}>
          sold
        </div>
      </div>
      <div className={styles.cardBody}>
        <Text size="lg" c="dimmed">Oakland, CA 94611</Text>
        <Group>
          <Text size="lg" c="dimmed">
            Represented: Seller
          </Text>
        </Group>
      </div>
    </div>
  );
};

export default SoldProperty;
