import React from "react";
import Link from "next/link";

import styles from "./FooterNavLinkSection.module.scss";

type FooterNavLinkSectionProps = {
  data: {
    headline: string;
    navLinks: Array<Record<"navLink", Record<"urlPath" | "urlText", string>>>
  };
};

const FooterNavLinkSection: React.FC<FooterNavLinkSectionProps> = ({ data }) => {
  const navLinks = data.navLinks.map(item => (
    <li key={item?.navLink?.urlText}>
      <Link href={item?.navLink?.urlPath ?? ''}>{item?.navLink?.urlText}</Link>
    </li>
  ));

  return (
    <section className={styles.quickLinksSection}>
      <h3 className={styles.quickLinksTitle}>{data?.headline}</h3>

      <ul className={styles.linksSection}>
        {navLinks}
      </ul>
    </section>
  )
}

export default FooterNavLinkSection;
