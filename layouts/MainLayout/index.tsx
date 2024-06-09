import Link from 'next/link'
import React from 'react'
import MainFooter from '../MainFooter'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <div>
          <p>Logo</p>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/about-me">about</Link>
            </li>
            <li>
              <Link href="/contact-me">contact</Link>
            </li>
            <li>
              <Link href="/listings">Gallery of listings</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        main layout
        {children}
      </main>

      <MainFooter />
    </>
  )
}

export default MainLayout