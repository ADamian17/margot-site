"use client";
import { builder, Builder } from "@builder.io/react";

import AboutMeSection from "@/components/AboutMeSection";
import BeforeAndAfterGallery from "./components/BeforeAndAfterGallery";
import ContactForm from "@/components/ContactForm";
import FeaturedReviews from "@/components/FeaturedReviews";
import ReviewsGrid from "./components/ReviewsGrid";
import SectionContactForm from "@/components/SectionContactForm";
import SoldPropertiesGrid from "./components/SoldPropertiesGrid";

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

Builder.registerComponent(FeaturedReviews, {
  name: "FeaturedReviews",
});

Builder.registerComponent(BeforeAndAfterGallery, {
  name: "BeforeAndAfterGallery",
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
      type: "list",
      name: "images",
      defaultValue: [],
      subFields: [
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
              defaultValue: "",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(ReviewsGrid, {
  name: "ReviewsGrid",
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
      type: "list",
      name: "reviews",
      defaultValue: [],
      subFields: [
        {
          type: "string",
          name: "name",
          defaultValue: "",
        },
        {
          type: "number",
          name: "rating",
          defaultValue: 0,
        },
        {
          type: "richText",
          name: "text",
          defaultValue: "",
        },
        {
          type: "string",
          name: "link",
          defaultValue: "",
        },
      ],
    },
  ],
});

Builder.registerComponent(SoldPropertiesGrid, {
  name: "SoldPropertiesGrid",
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
  ],
});
