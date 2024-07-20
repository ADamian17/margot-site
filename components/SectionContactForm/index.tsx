import React from "react";

import ContactForm from "../ContactForm";
import Container from "@/ui/Container";
import DreAndEmail from "../DreAndEmail";
import Grid from "@/ui/grid-system/Grid";
import SocialMediaIcons from "../SocialMediaIcons";

import styles from "./SectionContactForm.module.scss";
import { Image, Space } from "@mantine/core";

type ContactFormType = {};

const SectionContactForm: React.FC<ContactFormType> = (props) => {
  return (
    <Container isCentered>
      <Grid>
        <Grid.Col
          span={{ sm: 4, md: 3, lg: 5 }}
          className={styles.copySection}
        >
          <div className={styles.topSection}>
            <p className={styles.heading}>Let&apos;s Connect</p>
            <p className={styles.phoneNumber}>203.644.6117</p>
          </div>

          <DreAndEmail withEmail />

          <div className={styles.socialMedia}>
            <SocialMediaIcons />
          </div>

          <Space h="lg" />

          <div>
            <Image src="https://cdn.builder.io/api/v1/image/assets%2F612ce6d4821343dfb8b2cf8ce7882b57%2F8f14549069a04378a5b427075303ce1b" width={100} height={400} alt="margot" />
          </div>
        </Grid.Col>

        <Grid.Col
          span={{ sm: 4, md: 5, lg: 7 }}
          className={styles.formContact}
        >
          <div className={styles.copySection}>
            <p className={styles.heading}>contact form</p>
            <p className={styles.subcopy}>I&apos;d love to hear from you. </p>
          </div>

          <ContactForm />
        </Grid.Col>
      </Grid>
    </Container>
  )
};

export default SectionContactForm;
