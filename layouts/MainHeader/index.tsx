"use client";
import React, { ElementRef, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './MainHeader.module.scss'
import { useDisclosure } from '@mantine/hooks';
import { Box, Burger, Divider, Drawer, ScrollArea, rem } from '@mantine/core';

const MainHeader = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
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
          src='/icons/dark-logo.svg'
          alt='margot logo'
          width={200}
          height={40}
        />
      </Link>

      <nav className={styles.nav}>
        <Link className={styles.navLink} href="/about-me">about</Link>
        <Link className={styles.navLink} href="/before-and-after">Before & After</Link>
        <Link className={styles.navLink} href="/testimonials">Testimonials</Link>
        <Link className={styles.navLink} href="/contact-me">contact</Link>
      </nav>

      <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={<Image
          src='/icons/dark-logo.svg'
          alt='margot logo'
          width={200}
          height={40}
        />}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <nav className={styles.nav}>
            <Link className={styles.navLink} href="/about-me">about</Link>
            <Link className={styles.navLink} href="/before-and-after">Before & After</Link>
            <Link className={styles.navLink} href="/testimonials">Testimonials</Link>
            <Link className={styles.navLink} href="/contact-me">contact</Link>
          </nav>
        </ScrollArea>
      </Drawer>
    </header>
  )
}

export default MainHeader
