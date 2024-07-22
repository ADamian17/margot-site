import React from "react";
import Link from "next/link";

import styles from "./MainNavbar.module.scss";

type MainNavbarType = {
  orientation?: "horizontal" | "vertical";
  className?: string;
  navLinks?: Array<Record<"navLink", Record<"urlPath" | "urlText", string>>>
};

const data = [
  {
    navLink: {
      urlPath: "/about-me",
      urlText: "about me"
    }
  },
  {
    navLink: {
      urlPath: "/sold-properties",
      urlText: "Sold Properties"
    }
  },
  {
    navLink: {
      urlPath: "/before-and-after",
      urlText: "Before & After"
    }
  },
  {
    navLink: {
      urlPath: "/about-me",
      urlText: "about me"
    }
  },
  {
    navLink: {
      urlPath: "/testimonials",
      urlText: "Testimonials"
    }
  },
  {
    navLink: {
      urlPath: "/contact-me",
      urlText: "contact me"
    }
  },
]

const MainNavbar: React.FC<MainNavbarType> = ({ orientation = "horizontal", className, navLinks }) => {
  const navItems = (navLinks ?? data).map(item => (
    <Link key={item?.navLink?.urlPath} className={styles.navLink} href={item?.navLink?.urlPath ?? ''}>{item?.navLink?.urlText}</Link>
  ))

  return (
    <nav className={`${styles.nav} ${styles[orientation]} ${className}`}>
      {navItems}
    </nav>
  )
};

export default MainNavbar;