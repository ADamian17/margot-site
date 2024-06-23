import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Container from '@/ui/Container'
import DreAndEmail from '@/components/DreAndEmail'
import Grid from '@/ui/grid-system/Grid'
import SocialMediaIcons from '@/components/SocialMediaIcons'

import styles from './MainFooter.module.scss'
import FooterContactSectionContainer from '@/containers/FooterContactSectionContainer'

const MainFooter = () => {
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
                  height={40}
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

            <FooterContactSectionContainer />
          </Grid.Col>

          <Grid.Col span={12}>
            <section className={styles.copyRightSection}>
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
