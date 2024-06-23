import React, { ElementRef, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

import styles from './MainHeader.module.scss'

const MainHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<ElementRef<"header">>(null);
  const sentinelRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (headerRef.current) {
          setIsSticky(!entry.isIntersecting);
        }
      },
      { threshold: [1] }
    );


    const currentSentinelRef = sentinelRef.current;

    if (currentSentinelRef) {
      observer.observe(currentSentinelRef);
    }

    return () => {
      if (currentSentinelRef) {
        observer.unobserve(currentSentinelRef);
      }
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} />
      <header ref={headerRef} className={`${styles.header} ${isSticky && styles.sticky}`}>
        <Link href='/' className={styles.logo}>
          <Image
            src='/icons/dark-logo.svg'
            alt='margot logo'
            width={200}
            height={40}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        <nav className={styles.nav}>
          <Link className={styles.navLink} href="/about-me">about</Link>
          <Link className={styles.navLink} href="/listings">Before & After</Link>
          <Link className={styles.navLink} href="/contact-me">contact</Link>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
