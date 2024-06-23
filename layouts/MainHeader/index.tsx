import Link from 'next/link'
import React from 'react'

const MainHeader = () => (
  <header id="top-nav">
    <nav>
      <ul>
        <li>
          <Link href="/about-me">about</Link>
        </li>
        <li>
          <Link href="/contact-me">contact</Link>
        </li>
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          <Link href="/listings">Before and After</Link>
        </li>
        <li>
          <Link href="/listings">Gallery of listings</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default MainHeader
