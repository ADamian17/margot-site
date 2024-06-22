import Link from 'next/link'
import React from 'react'
import MainFooter from '../MainFooter'
import {BuilderContent} from '@builder.io/react'

type MainLayoutProps = {
  children: React.ReactNode
  builderState: Record<string, any>
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, builderState ,...rest}) => {
  return (
    <>
      <header id="top-nav">
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
        {children}
      </main>

      <MainFooter pathname={builderState?.state?.location?.pathname || '/'} />
    </>
  )
}

export default MainLayout
