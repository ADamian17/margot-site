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
      <div className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="https://cdn.builder.io/o/assets%2F612ce6d4821343dfb8b2cf8ce7882b57%2F9590e6c900eb43eb82522b71f5bc333a%2Fcompressed?apiKey=612ce6d4821343dfb8b2cf8ce7882b57&token=9590e6c900eb43eb82522b71f5bc333a&alt=media&optimized=true" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1>Contact Margot Martin</h1>
          <p>Let&apos;s get in touch</p>
        </div>
      </div>
      <div id='sentinel' />
      <MainHeader />

      <main>
        {children}
      </main>

      <MainFooter pathname={builderState?.state?.location?.pathname || '/'} />
    </>
  )
}

export default MainLayout
