import React from "react";
import { Badge, Text } from "@mantine/core";

import styles from "./SoldProperty.module.scss";
import Link from "next/link";
import Image from "next/image";
import { toCurrency } from "@/utils/toCurrency";

export type SoldPropertyProps = {
  address: string
  baths: number
  beds: number
  image: string
  originallyListed: number
  price: number
  propertyLink: string
  represented: "buyer" | "seller"
  status: "sold" | "pending" | "active"
}

const SoldProperty: React.FC<SoldPropertyProps> = ({
  address,
  baths,
  beds,
  image,
  originallyListed,
  price,
  propertyLink,
  represented,
  status = "sold",
}) => (
  <div className={styles.card}>
    <Link href={propertyLink} target="_blank" rel="no-follow">
      <div className={styles.cardHeader}>
        <div className={styles.imageWrapper}>
          <Image
            fill
            src={image}
            alt="property image"
            className={styles.image}
          />
        </div>

        <Badge color="gray" size="xl" className={styles.badge}>{status}</Badge>

        <div className={styles.copy}>
          {price && <h3>{toCurrency(price)}</h3>}
          <h6>{beds} Beds • {baths} Baths</h6>
        </div>
      </div>
    </Link>

    <div className={styles.cardBody}>
      <Text size="md">{address}</Text>

      <Text size="md">
        Originally Listed: {toCurrency(originallyListed)}
      </Text>

      <Text size="sm">
        Represented: {represented}
      </Text>
    </div>
  </div>
);

export default SoldProperty;
