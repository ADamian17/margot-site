import React from 'react'
import Link from 'next/link';
import { builder } from '@builder.io/sdk'

import { jost } from '@/assets/fonts';
import { IconCircleChevronDown } from '@tabler/icons-react';
import styles from './MainHero.module.scss'

type MainHeroProps = {
  pathname: string;
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const MainHero: React.FC<MainHeroProps> = async ({ pathname }) => {
  const res = await builder.get('hero', {
    userAttributes: {
      urlPath: pathname,
    },
  }).promise()

  return (
    <section className={styles.hero}>
      <video
        autoPlay
        className={styles.heroVideo}
        loop
        muted
      >
        <source src={res?.data?.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.heroOverlay}>
        <h1 className={`${styles.headline} ${jost.className}`}>{res?.data?.title}</h1>
        <p className={`${styles.subcopy} ${jost.className}`}>{res?.data?.subtitle}</p>

        <Link href={`${pathname}#main-content`} className={styles.cta}>
          <IconCircleChevronDown size={48} color='#fff' strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  )
}

export default MainHero
