"use client";
import { builder, Builder, withChildren } from "@builder.io/react";

import ContactForm from "@/components/ContactForm";
import MainLayout from "@/layouts/MainLayout";
import SectionContactForm from "./components/SectionContactForm";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(MainLayout), {
  name: "MainLayout",
});

Builder.registerComponent(ContactForm, {
  name: "ContactForm",
});

Builder.registerComponent(SectionContactForm, {
  name: "SectionContactForm",
});
