import React from "react";
import Link from "next/link";

import styles from "./SocialMediaIcons.module.scss";

type SocialMediaIconsType = {};

const SocialMediaIcons: React.FC<SocialMediaIconsType> = (props) => (
  <div className={styles.socialMediaIcons}>
    <Link
      className={styles.socialMediaLink}
      href='https://www.linkedin.com/in/margot-martin-realtor'
      rel="nofollow"
      target='_blank'
    >
      <svg className={styles.socialMediaIcon}>
        <use href='/icons/social-media-defs.svg#linkedin' />
      </svg>
    </Link>

    <Link
      className={styles.socialMediaLink}
      href='https://www.instagram.com/margotmartinthebay'
      rel="nofollow"
      target='_blank'
    >
      <svg className={styles.socialMediaIcon}>
        <use href='/icons/social-media-defs.svg#instagram' />
      </svg>
    </Link>

    <Link
      rel="nofollow"
      className={styles.socialMediaLink}
      href='https://www.grubbco.com/agent-profile/margot-martin-109779059'
      target='_blank'
    >
      <svg className={styles.socialMediaIcon}>
        <use href='/icons/social-media-defs.svg#external-link' />
      </svg>
    </Link>
  </div>
)

export default SocialMediaIcons;