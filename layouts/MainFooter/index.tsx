import React from 'react'
import Container from '@/components/ui/Container'

import styles from './MainFooter.module.scss'

const MainFooter: React.FC = (props) => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <Container.Centered>
          <section className={styles.socialMediaSection}>
            social media
          </section>

          <section className={styles.linksSection}>
            footer nav
          </section>

          <section className={styles.contactSection}>
            contact
          </section>

          <section className={styles.copyRightSection}>
            <p>&copy; {year} Margot Martin. All rights reserved.</p>
          </section>
        </Container.Centered>
      </Container>
    </footer>
  )
}

export default MainFooter
