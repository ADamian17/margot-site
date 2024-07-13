"use client";
import { builder, Builder } from "@builder.io/react";

import ContactForm from "@/components/ContactForm";
import SectionContactForm from "@/components/SectionContactForm";
import AboutMeSection from "@/components/AboutMeSection";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ContactForm, {
  name: "ContactForm",
});

Builder.registerComponent(SectionContactForm, {
  name: "SectionContactForm",
});

Builder.registerComponent(AboutMeSection, {
  name: "AboutMeSection",
  inputs: [
    {
      type: "string",
      name: "headline",
      defaultValue: "",
    },
    {
      type: "string",
      name: "subcopy",
      defaultValue: "",
    },
    {
      type: "richText",
      name: "copy",
      defaultValue: "",
    },
    {
      type: "string",
      name: "ctaText",
      defaultValue: "learn more",
    },
    {
      type: "string",
      name: "ctaLink",
      defaultValue: "/about-me",
    },
    {
      type: "object",
      name: "image",
      subFields: [
        {
          type: "file",
          name: "src",
          defaultValue: "",
        },
        {
          type: "string",
          name: "alt",
          defaultValue: "margot foto",
        },
      ],
    },
  ],
});
