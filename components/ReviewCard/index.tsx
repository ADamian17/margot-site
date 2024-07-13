import React from "react";

import styles from "./ReviewCard.module.scss";

type ReviewCardType = {};

const ReviewCard: React.FC<ReviewCardType> = (props) => {
  return (
    <div className={styles.reviewCard}>
      <div>
        <h3 className={styles.headline}>Sarah Thompson</h3>
        <p className={styles.subcopy}>produce-ui.com</p>
      </div>

      <div className={styles.ratings}>
        <svg className={styles.star}>
          <use href='/icons/logos-defs.svg#full-star' />
        </svg>
        <svg className={styles.star}>
          <use href='/icons/logos-defs.svg#full-star' />
        </svg>
        <svg className={styles.star}>
          <use href='/icons/logos-defs.svg#full-star' />
        </svg>
        <svg className={styles.star}>
          <use href='/icons/logos-defs.svg#full-star' />
        </svg>
        <svg className={styles.star}>
          <use href='/icons/logos-defs.svg#full-star' />
        </svg>
      </div>

      <p className={styles.copy}>
        Jeffery Cannon is an incredibly talented web designer. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Jeffery was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Jeffery for anyone looking to elevate their online presence.
      </p>
    </div>
  )
};

export default ReviewCard;