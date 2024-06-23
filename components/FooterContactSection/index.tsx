import React from "react";
import Image from "next/image";
import { builder } from '@builder.io/sdk'

import { IMAGE_PLACEHOLDER } from "@/utils/constants";
import DreAndEmail from "@/components/DreAndEmail";

import styles from "./FooterContactSection.module.scss";

type FooterContactSectionProps = {
  data: Record<"image" | "headline" | "phone", string>;
};

const FooterContactSection: React.FC<FooterContactSectionProps> = ({ data }) => (
  <section className={styles.contactSection}>
    <Image
      src={data?.image || IMAGE_PLACEHOLDER}
      alt={'Margot Image'}
      width={280}
      height={338.11}
      className={styles.contactSectionImage}
      priority={false}
    />

    <div className={styles.contactSectionCopy}>
      <h2 className={styles.contactTitle}>{data?.headline}</h2>

      <ul className={styles.copy}>
        <li>
          <p>{data?.phone}</p>
        </li>
        <li>
          <DreAndEmail withEmail />
        </li>
      </ul>
    </div>
  </section>
)

export default FooterContactSection;
