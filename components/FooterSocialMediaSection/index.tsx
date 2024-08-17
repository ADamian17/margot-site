import React from "react";
import Link from "next/link";

import DreAndEmail from "../DreAndEmail";
import SocialMediaIcons from "../SocialMediaIcons";

import styles from "./FooterSocialMediaSection.module.scss";

type FooterSocialMediaSectionProps = {
  data: {
    footerLogo: Record<"altText" | "mediaItemUrl", string>;
  };
};

const FooterSocialMediaSection: React.FC<FooterSocialMediaSectionProps> = ({ data }) => {
  return (
    <section className={styles.socialMediaSection}>
      <Link href='/' className={styles.logo}>
        <svg className={styles.logoImg}>
          <use href="/icons/logos-defs.svg#margot-logo-two"></use>
        </svg>
      </Link>

      <DreAndEmail />

      <SocialMediaIcons />
    </section>
  )
}

export default FooterSocialMediaSection;
