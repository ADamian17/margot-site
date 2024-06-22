import React from "react";

import Button from "../ui/Buttons/Button";
import Grid from "../ui/grid-system/Grid";
import Input from "../ui/Inputs/Input";
import TextArea from "../ui/Inputs/TextArea";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <form>
      <Grid>
        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <label htmlFor="first-name">Name</label>
          <Input placeholder="e.g John Doe" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <label htmlFor="email">Your Email</label>

          <Input placeholder="e.g johndoe@gmail.com" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <label htmlFor="phone">Your Phone</label>
          <Input placeholder="e.g 222 555 2255" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <label htmlFor="email">Message</label>
          <TextArea
            placeholder="e.g Your message here"
            rows={5}
          />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <Button>send</Button>
        </Grid.Col>
      </Grid>
    </form>
  )
};

export default ContactForm;
