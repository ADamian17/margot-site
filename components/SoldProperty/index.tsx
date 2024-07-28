import React from "react";
import { Badge, Button, Card, CardSection, Group, Overlay, Text } from "@mantine/core";

import styles from "./SoldProperty.module.scss";
import Link from "next/link";
import Image from "next/image";

const SoldProperty: React.FC = () => {
  return (
    <div className={styles.card}>
      <Link href="/property/123">
        <div className={styles.cardHeader}>
          <div className={styles.imageWrapper}>
            <Image
              fill
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              alt="Norway"
              className={styles.image}
            />
          </div>

          <Badge color="gray" size="xl" className={styles.badge}>Sold</Badge>

          <div className={styles.copy}>
            <h3>$1,200,000</h3>
            <h6>3 bed • 2 Baths</h6>
          </div>
        </div>
      </Link>

      <div className={styles.cardBody}>
        <Text size="md">88 garland ave, Oakland, CA 94611</Text>

        <Text size="md">
          Originally Listed: 1,000,000
        </Text>

        <Text size="sm">
          Represented: Seller
        </Text>


      </div>
    </div>
  );
};

export default SoldProperty;
