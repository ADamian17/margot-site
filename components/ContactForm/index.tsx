import React, { useRef } from "react";

import Button from "@/ui/Buttons/Button";
import Grid from "@/ui/grid-system/Grid";
import Input from "@/ui/Inputs/Input";
import TextArea from "@/ui/Inputs/TextArea";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(formRef.current!);
      const res = await fetch(`https://formkeep.com/f/${process.env.NEXT_PUBLIC_FORMKEEP_API_KEY}`, {
        method: 'POST',
        body: formData
      })

      if (res.ok) formRef.current?.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <Grid>
        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <Input placeholder="your name" label="Name" name="name" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 4, lg: 6 }}>
          <Input placeholder="your email" label="Email" name="email" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <Input placeholder="your phone" label="Phone" name="phone" />
        </Grid.Col>

        <Grid.Col span={{ sm: 4, md: 8, lg: 12 }}>
          <TextArea
            label="Message"
            placeholder="Your message here..."
            rows={5}
            name="message"
          />
        </Grid.Col>

        <Grid.Col
          span={{ sm: 4, md: 8, lg: 12 }}
          className={styles.submitButton}
        >
          <Button>send</Button>
        </Grid.Col>
      </Grid>
      <input type="hidden" name="utf8" value="✓" />
    </form>
  )
};

export default ContactForm;
