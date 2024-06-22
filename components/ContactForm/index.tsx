import React from "react";

import Grid from "../ui/grid-system/Grid";

import styles from "./ContactForm.module.scss";

type ContactFormType = {};

const ContactForm: React.FC<ContactFormType> = (props) => {
  return (
    <form>
      <Grid>
        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <label htmlFor="first-name">First Name</label>
          <input placeholder="e.g John" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <label htmlFor="last-name">Last Name</label>
          <input placeholder="e.g Doe" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <label htmlFor="email">Your Email</label>
          <input placeholder="e.g johndoe@gmail.com" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <label htmlFor="phone">Your Phone</label>
          <input placeholder="e.g 222 555 2255" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <textarea
            placeholder="e.g Your message here"
            rows={5}
          />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <button>send</button>
        </Grid.Col>
      </Grid>
    </form>
  )
};

export default ContactForm;
