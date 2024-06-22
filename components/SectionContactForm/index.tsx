import React from "react";

import ContactForm from "../ContactForm";
import Container from "../ui/Container";
import Grid from "../ui/grid-system/Grid";
import SocialMediaIcons from "../SocialMediaIcons";

import styles from "./SectionContactForm.module.scss";

type ContactFormType = {};

const SectionContactForm: React.FC<ContactFormType> = (props) => {
  return (
    <Container isCentered>
      <Grid>
        <Grid.Col span={{ sm: 4, md: 3, lg: 4 }}>
          <section>
            <div>
              <h1>Let&apos;s Connect</h1>
              <p>(203) 644-6117</p>
              <p>margotmartin@grubbco.com</p>
              <p>DRE 02145679</p>
            </div>

            <div>
              <p>Connect with me on social media</p>

              <SocialMediaIcons />
            </div>
          </section>
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 5, lg: 8 }}>
          <ContactForm />
        </Grid.Col>
      </Grid>
    </Container>
  )
};

export default SectionContactForm;
