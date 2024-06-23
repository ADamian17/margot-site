import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Container from '@/ui/Container'
import DreAndEmail from '@/components/DreAndEmail'
import Grid from '@/ui/grid-system/Grid'
import SocialMediaIcons from '@/components/SocialMediaIcons'

import styles from './MainFooter.module.scss'

type MainFooterProps = {
  pathname: string
}

const MainFooter: React.FC<MainFooterProps> = ({ pathname }) => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container isCentered>
        <Grid>
          <Grid.Col span={12} className={styles.footerWrapper}>
            <section className={styles.socialMediaSection}>
              <Link href='/'>
                <Image
                  src='/icons/dark-logo.svg'
                  alt='margot logo'
                  width={200}
                  height={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>

              <DreAndEmail />

              <SocialMediaIcons />
            </section>

            <section className={styles.quickLinksSection}>
              <h3 className={styles.quickLinksTitle}>quick links</h3>

              <ul className={styles.linksSection}>
                <li>
                  <Link href="/about-me">about me</Link>
                </li>
                <li>
                  <Link href="/contact-me">contact me</Link>
                </li>
                <li>
                  <Link href="/listings">Gallery of listings</Link>
                </li>
              </ul>
            </section>

            <section className={styles.contactSection}>
              <Image
                src={''}
                alt={'Margot Image'}
                className={styles.contactSectionImage}
              />

              <div className={styles.contactSectionCopy}>
                <h2 className={styles.contactTitle}>contact margot</h2>

                <ul className={styles.copy}>
                  <li>
                    <p>203.644.6117</p>
                  </li>
                  <li>
                    <DreAndEmail withEmail />
                  </li>
                </ul>
              </div>
            </section>
          </Grid.Col>

          <Grid.Col span={12}>
            <section className={styles.copyRightSection}>
              <Link
                href={`${pathname}#top-nav`}
                className={styles.toTop}
              >
                <svg>
                  <use href='/icons/icons-defs.svg#chevrons-up' />
                </svg>

                <span>to top</span>
              </Link>

              <p className={styles.copy}>
                &copy; {year} Margot Martin | All rights reserved | Made by{' '}

                <Link
                  className={styles.developerLink}
                  href='https://www.adonismartin.com/'
                  rel="nofollow"
                  target='_blank'
                >
                  Adonis D. Martin
                </Link>
              </p>
            </section>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  )
}

export default MainFooter
