import React from 'react'
import Link from 'next/link';

import { jost } from '@/assets/fonts';
import { IconCircleChevronDown } from '@tabler/icons-react';

import styles from './MainHero.module.scss'

type MainHeroProps = {
  title: string;
  subtitle: string;
  videoUrl: string;
  imageUrl: string;
  pathname: string;
}

const MainHero: React.FC<MainHeroProps> = ({ title, subtitle, videoUrl, pathname }) => {
  return (
    <section className={styles.hero}>
      <video
        autoPlay
        className={styles.heroVideo}
        loop
        muted
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.heroOverlay}>
        <h1 className={`${styles.headline} ${jost.className}`}>{title}</h1>
        <p className={`${styles.subcopy} ${jost.className}`}>{subtitle}</p>

        <Link href={`${pathname}#main-content`} className={styles.cta}>
          <IconCircleChevronDown size={48} color='#fff' strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  )
}

export default MainHero
