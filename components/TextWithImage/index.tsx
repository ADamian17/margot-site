import React from "react";

import Container from "@/ui/Container";

import styles from "./TextWithImage.module.scss";
import Image from "next/image";

type TextWithImageType = {
  text: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  swapOrder: boolean;
};

const TextWithImage: React.FC<TextWithImageType> = ({ image, text, title, swapOrder }) => {
  return (
    <Container isCentered>
      <section className={`${styles.wrapper} ${swapOrder && styles.reverse}`}>
        <div className={styles.copy}>
          <h2 className={styles.headline}>{title}</h2>
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
        </div>

        <div className={styles.imageWrapper}>
          <Image src={image.src} alt={image.alt} fill />
        </div>
      </section>
    </Container>
  )
};

export default TextWithImage;