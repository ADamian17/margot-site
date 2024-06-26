import React from 'react'
import Link from 'next/link'
import { builder } from '@builder.io/sdk'

import Container from '@/ui/Container'
import FooterContactSection from '@/components/FooterContactSection'
import FooterNavLinkSection from '@/components/FooterNavLinkSection'
import FooterSocialMediaSection from '@/components/FooterSocialMediaSection'
import Grid from '@/ui/grid-system/Grid'

import styles from './MainFooter.module.scss'


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const MainFooter = async () => {
  const res = await builder.get('footer').promise()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container isCentered>
        <Grid>
          <Grid.Col span={12} className={styles.footerWrapper}>
            <FooterSocialMediaSection data={res?.data?.footerSocialMediaSection} />

            <FooterNavLinkSection data={res?.data?.footerNavLinksSection} />

            <FooterContactSection data={res?.data?.contactSection} />
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
