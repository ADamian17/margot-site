"use client";
import React, { ElementRef, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MainNavbar from '@/components/MainNavbar';
import MainNavbarMobile from '@/components/MainNavbarMobile';

import styles from './MainHeader.module.scss'

const MainHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<ElementRef<"header">>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (headerRef.current) {
          setIsSticky(!entry.isIntersecting);
        }
      },
      { threshold: [1], rootMargin: "200px" }
    );


    const currentSentinelRef = document.getElementById("sentinel");

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
    <header ref={headerRef} className={`${styles.header} ${isSticky && styles.sticky}`}>
      <Link href='/' className={styles.logo}>
        <Image
          src='/icons/dark-logo-2.svg'
          alt='margot logo'
          width={200}
          height={40}
        />
      </Link>

      <MainNavbar className={styles.navBar} />

      <MainNavbarMobile />
    </header>
  )
}

export default MainHeader
