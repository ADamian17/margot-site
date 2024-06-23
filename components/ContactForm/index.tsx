import React from "react";

import Button from "@/ui/Buttons/Button";
import Grid from "@/ui/grid-system/Grid";
import Input from "@/ui/Inputs/Input";
import TextArea from "@/ui/Inputs/TextArea";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <Grid>
        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <Input placeholder="your name" label="Name" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <Input placeholder="your email" label="Email" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <Input placeholder="your phone" label="Phone" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <TextArea
            label="Message"
            placeholder="Your message here..."
            rows={5}
          />
        </Grid.Col>

        <Grid.Col
          span={{ sm: 4, md: 8, lg: 12 }}
          className={styles.submitButton}
        >
          <Button>send</Button>
        </Grid.Col>
      </Grid>
    </form>
  )
};

export default ContactForm;
