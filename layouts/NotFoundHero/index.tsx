import React from 'react'
import Link from 'next/link';

import { jost } from '@/assets/fonts';
import { IconCircleChevronDown } from '@tabler/icons-react';
import { Button, Group } from '@mantine/core';

import styles from './NotFoundHero.module.scss'

type NotFoundHeroProps = {
  title: string;
  subtitle: string;
  videoUrl: string;
  imageUrl: string;
  pathname: string;
}

const NotFoundHero: React.FC<NotFoundHeroProps> = ({ title, subtitle, videoUrl, pathname }) => (
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
      <p className={`${styles.subcopy} ${jost.className}`}>Page you are trying to open does not exist.</p>

      <Group justify="center">
        <Button component={Link} href="/" size="lg" color='gray'>Take me back to home page</Button>
      </Group>
    </div>
  </section>
)

export default NotFoundHero
