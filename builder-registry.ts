"use client";
import { builder, Builder } from "@builder.io/react";

import ContactForm from "@/components/ContactForm";
import SectionContactForm from "./components/SectionContactForm";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ContactForm, {
  name: "ContactForm",
});

Builder.registerComponent(SectionContactForm, {
  name: "SectionContactForm",
});
