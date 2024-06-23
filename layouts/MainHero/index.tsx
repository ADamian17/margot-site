import React from 'react'
import { Builder } from "@builder.io/react";

type MainHeroProps = {
  subtitle: string;
  title: string;
  videoUrl: string;
}

const MainHero: React.FC<MainHeroProps> = ({
  subtitle,
  title,
  videoUrl,
}) => (
  <div className="hero">
    <video
      autoPlay
      className="hero-video"
      loop
      muted
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="hero-overlay">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
)

export default MainHero

export const registerMainHero = () => {
  Builder.registerComponent(MainHero, {
    name: "MainHero",
    inputs: [
      {
        name: "videoUrl",
        type: "file",
        defaultValue: "",
      },
      {
        name: "title",
        type: "string",
        defaultValue: "",
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "",
      },
    ],
  });
}