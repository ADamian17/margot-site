import React from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/ui/Container";;

import styles from "./AboutMeSection.module.scss";

type AboutMeSectionType = {
  headline: string;
  subcopy: string;
  copy: string;
  ctaText: string;
  ctaLink: string;
  image: Record<"src" | "alt", string>
};

const AboutMeSection: React.FC<AboutMeSectionType> = ({ headline, copy, ctaLink, ctaText, image, subcopy }) => {
  return (
    <Container isCentered className={styles.aboutMeWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.rightSection}>
          <h2 className={styles.headline}>{headline}</h2>

          <div className={styles.subcopyWrapper}>
            <h3 className={styles.subcopy}>{subcopy}</h3>
          </div>

          <div dangerouslySetInnerHTML={{ __html: copy }} className={styles.copyWrapper} />

          <Link href={ctaLink} className={styles.cta}>
            {ctaText}
          </Link>
        </div>

        <div className={styles.imgWrapper}>
          <Image src={image.src} alt={image.alt} fill className={styles.img} />
        </div>
      </div>
    </Container>
  )
};

export default AboutMeSection;
