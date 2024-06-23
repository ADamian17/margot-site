import React from "react";
import Image from "next/image";
import { builder } from '@builder.io/sdk'

import { IMAGE_PLACEHOLDER } from "@/utils/constants";
import DreAndEmail from "@/components/DreAndEmail";

import styles from "./FooterContactSectionContainer.module.scss";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const FooterContactSectionContainer = async () => {
  const res = await builder.get('footer', {
    fields: 'data.contactSection'
  }).promise()

  const src = res?.data?.contactSection?.image || IMAGE_PLACEHOLDER;

  return (
    <section className={styles.contactSection}>
      <Image
        src={src}
        alt={'Margot Image'}
        width={280}
        height={338.11}
        className={styles.contactSectionImage}
        priority={false}
      />

      <div className={styles.contactSectionCopy}>
        <h2 className={styles.contactTitle}>contact margot</h2>

        <ul className={styles.copy}>
          <li>
            <p>203.644.6117</p>
          </li>
          <li>
            <DreAndEmail withEmail />
          </li>
        </ul>
      </div>
    </section>
  )
};

export default FooterContactSectionContainer;
