import React from "react";

import ContactForm from "../ContactForm";
import Container from "../ui/Container";
import Grid from "../ui/grid-system/Grid";
import SocialMediaIcons from "../SocialMediaIcons";

import styles from "./SectionContactForm.module.scss";
import DreAndEmail from "../DreAndEmail";

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
            <p className={styles.phoneNumber}>(203) 644 6117</p>
          </div>

          <DreAndEmail withEmail />

          <div className={styles.socialMedia}>
            <p className={styles.heading}>social media</p>
            <SocialMediaIcons />
          </div>
        </Grid.Col>

        <Grid.Col
          span={{ sm: 4, md: 5, lg: 7 }}
          className={styles.formContact}
        >
          <div className={styles.copySection}>
            <p className={styles.heading}>contact form</p>
            <p className={styles.subcopy}>I&apos;d love to here from you. </p>
          </div>

          <ContactForm />
        </Grid.Col>
      </Grid>
    </Container>
  )
};

export default SectionContactForm;
