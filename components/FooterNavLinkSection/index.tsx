import React from "react";
import Link from "next/link";

import styles from "./FooterNavLinkSection.module.scss";
import { Title } from "@mantine/core";
import MainNavbar from "../MainNavbar";

type FooterNavLinkSectionProps = {
  data: {
    headline: string;
    navLinks: Array<Record<"navLink", Record<"urlPath" | "urlText", string>>>
  };
};

const FooterNavLinkSection: React.FC<FooterNavLinkSectionProps> = ({ data }) => {
  const navLinks = data.navLinks.map(item => (
    <li key={item?.navLink?.urlText}>
      <Link className={styles.itemLink} href={item?.navLink?.urlPath ?? ''}>{item?.navLink?.urlText}</Link>
    </li>
  ));

  return (
    <section className={styles.quickLinksSection}>
      <Title order={2} size={40} style={{ textTransform: "uppercase", letterSpacing: 8 }}>{data?.headline}</Title>

      <MainNavbar orientation="vertical" navLinks={data.navLinks} />
    </section>
  )
}

export default FooterNavLinkSection;
