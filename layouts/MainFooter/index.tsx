import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Container from '@/components/ui/Container'

import styles from './MainFooter.module.scss'

const MainFooter: React.FC = (props) => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <Container.Centered>
          <section className={styles.socialMediaSection}>
            <Link href='/'>
              <Image
                src='/icons/dark-logo.svg'
                alt='Facebook'
                width={358}
                height={84}
              />
            </Link>

            <div className={styles.dreSection}>
              <p>DRE#02145679</p>
            </div>

            <div className={styles.socialMediaIcons}>
              <Link
                className={styles.socialMediaLink}
                href='/https://www.linkedin.com/in/margot-martin-realtor'
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
                  <use href='/icons/social-media-defs.svg#airplay' />
                </svg>
              </Link>
            </div>
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
                  <p>(203) 644-6117</p>
                </li>
                <li>
                  <p>(203) 644-6117</p>
                </li>
                <li className={styles.dreCopy}>
                  <p>DRE#02145679</p>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.copyRightSection}>
            <Link href='/#top-nav'>Back to the top</Link>
            <p>&copy; {year} Margot Martin. All rights reserved.</p>
          </section>
        </Container.Centered>
      </Container>
    </footer>
  )
}

export default MainFooter
