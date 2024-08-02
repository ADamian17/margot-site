import React from 'react'

import MainFooter from '../MainFooter'
import MainHeader from '../MainHeader'
import MainHero from '../MainHero'

type MainLayoutProps = {
  children: React.ReactNode
  Hero?: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, Hero }) => (
  <>
    <div id='sentinel' />
    <MainHeader />
    {Hero}
    <main>
      {children}
    </main>

    <MainFooter />
  </>
)

export default MainLayout
