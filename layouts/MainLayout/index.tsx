import React from 'react'

import MainFooter from '../MainFooter'
import MainHeader from '../MainHeader'
import MainHero from '../MainHero'

type MainLayoutProps = {
  children: React.ReactNode
  pathname: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, pathname }) => {
  return (
    <>
      <MainHero pathname={pathname} />
      <div id='sentinel' />
      <MainHeader />

      <main>
        {children}
      </main>

      <MainFooter />
    </>
  )
}

export default MainLayout
