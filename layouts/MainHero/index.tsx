import React from 'react'
import { builder } from '@builder.io/sdk'

type MainHeroProps = {
  pathname: string;
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const MainHero: React.FC<MainHeroProps> = async ({ pathname }) => {
  const res = await builder.get('hero', {
    userAttributes: {
      urlPath: pathname,
    },
  }).promise()

  return (
    <div className="hero">
      <video
        autoPlay
        className="hero-video"
        loop
        muted
      >
        <source src={res?.data?.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1>{res?.data?.title}</h1>
        <p>{res?.data?.subtitle}</p>
      </div>
    </div>
  )
}

export default MainHero
