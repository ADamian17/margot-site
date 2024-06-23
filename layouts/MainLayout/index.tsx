import React from 'react'

import MainFooter from '../MainFooter'
import MainHeader from '../MainHeader'

type MainLayoutProps = {
  children: React.ReactNode
  builderState: Record<string, any>
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, builderState, ...rest }) => {
  return (
    <>
      <div style={{ height: "100vh" }}>Hero</div>
      <div id='' />
      <MainHeader />

      <main>
        {children}
      </main>

      <MainFooter pathname={builderState?.state?.location?.pathname || '/'} />
    </>
  )
}

export default MainLayout
